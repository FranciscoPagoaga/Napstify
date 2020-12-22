pragma solidity ^0.5.0;

contract Napstify {
    uint public albumCount = 0;
    uint public songCount = 0;

    struct Album {
        uint id;
        string albumName;
        string artist;
    }

    struct Song {
        uint id;
        string name;
        string duration;
        string genre;
        uint albumid;
    }

    mapping(uint => Album) public albums; 

    mapping(uint => Song) public songs;

    constructor() public {
    }

    function createAlbum(string memory albumName, string memory artist) public {
        albumCount++;
        albums[albumCount] = Album(albumCount, albumName, artist);
    }

    function createSong(
        string memory name,
        string memory duration,
        string memory genre
    ) public {
        songCount++;
        songs[songCount] = Song(songCount, name, duration, genre, albumCount);
    }
}
