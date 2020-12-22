import { useEffect, useState } from "react";
import Login from "./Views/Login";
import AlbumPreview from "./Views/AlbumPreview";
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';


function App() {
  const [account, setAccount] = useState([]);

  return (
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/Albums">
        <AlbumPreview />
      </Route>
    </Router>
  );
}

export default App;
