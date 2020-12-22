import React, { useState } from "react";
import { Modal, ModalHeader, Table, CardImg } from "reactstrap";
import img from "../AlbumImg.png";
const AlbumModal = (props) => {
  return (
    <Modal
      style={{ maxWidth: "1400px", width: "80%" }}
      isOpen={props.isOpen}
      toggle={props.close}
    >
      <ModalHeader toggle={props.close}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "1em",
          }}
        >
          <div>
            <CardImg
              top
              style={{ width: "200px", height: "200px" }}
              src={img}
              alt="Album default"
            />
          </div>
          <div>
            <h1>{props.selectedAlbum.name}</h1>
            <h2>{props.selectedAlbum.artist}</h2>
            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Song Name</th>
                  <th>Genre</th>
                  <th>Duration</th>
                </tr>
              </thead>

              {props.selectedAlbum.songs.map((songs, i) => (
                <tbody>
                  <th>{i + 1}</th>
                  <td>{songs.name}</td>
                  <td>{songs.genre}</td>
                  <td>{songs.duration}</td>
                </tbody>
              ))}
            </Table>
          </div>
        </div>
      </ModalHeader>
    </Modal>
  );
};

export default AlbumModal;
