import { useEffect, useState } from "react";
import Login from "./Views/Login";
import Web3 from "web3";
import { ALBUM_ABI, ALBUM_ADDRESS } from "./config";

function App() {
  const [account, setAccount] = useState([]);

  const loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts);
    const albums = new web3.eth.Contract(ALBUM_ABI, ALBUM_ADDRESS);
    console.log({ albums });
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
  <Login/>
  );
}

export default App;
