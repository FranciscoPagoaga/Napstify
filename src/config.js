export const ALBUM_ADDRESS = "0xb7713b74434c22f5d50dffB8dEFa0cdcBE4B6D1A";

export const ALBUM_ABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "songs",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "duration",
        "type": "string"
      },
      {
        "name": "genre",
        "type": "string"
      },
      {
        "name": "albumid",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x304cff30"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "songCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x931a889b"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "albums",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "albumName",
        "type": "string"
      },
      {
        "name": "artist",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xea5df059"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "albumCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xef2dcbc1"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "albumName",
        "type": "string"
      },
      {
        "name": "artist",
        "type": "string"
      }
    ],
    "name": "createAlbum",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xe940ff43"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "duration",
        "type": "string"
      },
      {
        "name": "genre",
        "type": "string"
      }
    ],
    "name": "createSong",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x136f1751"
  }
]
