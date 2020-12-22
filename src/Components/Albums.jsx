import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import AlbumCard from "./AlbumCard.jsx";
import AlbumModal from "./AlbumModal.jsx";
import { AvForm, AvField } from "availity-reactstrap-validation";
import Web3 from "web3";
import { ALBUM_ABI, ALBUM_ADDRESS } from "../config";

const Albums = () => {
  const [albumModal, setAlbumModal] = useState(false);
  const [songModal, setSongModal] = useState(false);
  const [previewModal, setPreviewModal] = useState(false);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  let songs = [];
  const [filter, setFilter] = useState("");
  const [fetched, setFetched] = useState(false);
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albumslist, setAlbumsList] = useState([]);
  const [showedList, setShowedList] = useState([]);

  useEffect(() => {
    if (!fetched) {
      loadBlockchainData();
    }
    if (filter !== "") {
      let filteredAlbums = albumslist.filter((element) =>
        element.name.toUpperCase().includes(filter.toUpperCase())
      );
      setShowedList(filteredAlbums);
      console.log(filteredAlbums);
    } else {
      setShowedList(albumslist);
    }
  }, [filter]);

  const loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    const albums = new web3.eth.Contract(ALBUM_ABI, ALBUM_ADDRESS);
    const albumCount = await albums.methods.albumCount().call();
    console.log(albumCount);
    const songCount = await albums.methods.songCount().call();
    console.log(await albums.methods.albums(1).call());
    console.log(albums);
    let updatedAlbumsList = [];
    for (let i = 1; i <= albumCount; i++) {
      let payload = {
        name: "",
        artist: "",
        songs: [],
      };
      let albumlist1 = await albums.methods.albums(i).call();
      payload.name = albumlist1.albumName;
      payload.artist = albumlist1.artist;
      for (let j = 1; j <= songCount; j++) {
        let songs = await albums.methods.songs(j).call();
        if (songs.albumid === albumlist1.id) {
          payload.songs.push(songs);
        }
      }
      console.log(payload);
      updatedAlbumsList.push(payload);
    }
    console.log(updatedAlbumsList);
    setAlbumsList(updatedAlbumsList);
    setShowedList(updatedAlbumsList);
    setFetched(true);
  };

  const nextModal = () => {
    setSongModal(!songModal);
  };

  const nextModalData = (event, values) => {
    let payload = {
      name: values.album,
      artist: values.artist,
    };
    setName(values.album);
    setArtist(values.artist);
    nextModal();
  };

  const addSong = (event, values) => {
    let song = {
      name: values.name,
      duration: values.duration,
      genre: values.genre,
    };
    songs.push(song);
    console.log(songs);
  };

  const createAlbum = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const albums = new web3.eth.Contract(ALBUM_ABI, ALBUM_ADDRESS);
    const accounts = await web3.eth.getAccounts();
    albums.methods
      .createAlbum(name, artist)
      .send({ from: accounts[0] })
      .once("receipt", () => {
        console.log("agrego");
      });
    for (let index = 0; index < songs.length; index++) {
      albums.methods
        .createSong(
          songs[index].name,
          songs[index].duration,
          songs[index].genre
        )
        .send({ from: accounts[0] })
        .once("receipt", () => {
          console.log("agrego");
        });
    }
    closeModals();
    loadBlockchainData();
  };

  const onClose = () =>{
    setSelectedAlbum(null);
  }

  const closeModals = () => {
    setAlbumModal(false);
    setSongModal(false);
    songs = [];
  };

  return (
    <>
      {/* Modal para crear album */}
      <Modal isOpen={albumModal}>
        <AvForm onValidSubmit={nextModalData}>
          <ModalHeader>Add Album:</ModalHeader>
          <ModalBody>
            <AvField
              name="album"
              label="Album"
              placeholder="Insert Album"
              validate={{ required: true }}
            />
            <AvField
              name="artist"
              label="Artist"
              placeholder="Insert Artist"
              validate={{ required: true }}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Next
            </Button>
            <Button
              color="secondary"
              onClick={() => setAlbumModal(!albumModal)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
      {/* Modal para agregar canciones a album */}
      <Modal isOpen={songModal}>
        <AvForm onValidSubmit={addSong}>
          <ModalHeader>Add Song:</ModalHeader>
          <ModalBody>
            <AvField
              name="name"
              label="Song"
              placeholder="Insert Song"
              validate={{ required: true }}
            />
            <AvField
              name="duration"
              label="Duration"
              placeholder="Insert Song Duration"
              validate={{
                required: true,
                pattern: {
                  value: "^[0-9:]+$",
                  errorMessage: "Insert accepted Values (0-9, :)",
                },
              }}
            />
            <AvField
              name="genre"
              label="Genre"
              placeholder="Insert Genre"
              validate={{ required: true }}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={createAlbum}>
              Create Album
            </Button>
            <Button color="primary" type="submit">
              Add Song
            </Button>
            <Button color="secondary" onClick={() => closeModals()}>
              Cancel
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>

      {selectedAlbum && <AlbumModal isOpen={true} selectedAlbum={selectedAlbum} close={onClose} ></AlbumModal>}


      <Row noGutters style={{ paddingBottom: "10px" }}>
        <h1>Albums:</h1>
        <Button
          color="primary"
          style={{
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setAlbumModal(!albumModal)}
        >
          Add Album
        </Button>
      </Row>
      <Row noGutters style={{ paddingBottom: "2em" }}>
        <Input
          placeholder="Filter Album by Name"
          onChange={handleChange}
          value={filter}
          style={{ width: "40em" }}
        ></Input>
      </Row>
      {albumslist.length > 0 ? (
        <Row noGutters>
          {showedList.map((album, i) => (
            <div onClick={()=> setSelectedAlbum(album)}>
              <Col
                md={{ size: "auto" }}
                style={{ marginRight: "10px", marginLeft: "10px" }}
              >
                <AlbumCard album={album.name} artist={album.artist} />
              </Col>
            </div>
          ))}
        </Row>
      ) : (
        "lista esta vacia"
      )}
    </>
  );
};

export default Albums;
