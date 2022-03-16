import React from "react";
import './App.css';
import { NavLink } from "react-router-dom";
import Header from "./Header";

function App() {
  const [dataWelcome, setData] = React.useState(null);
  
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((dataWelcome) => setData(dataWelcome.message));
  }, []);

  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <div className="welcome">
          <h1>Welcome on GPUCrack !</h1>
          <NavLink to="/onehash"><button type="button" class="btn btn-primary">OneHash</button></NavLink>
          <NavLink to="/result"><button type="button" class="btn btn-primary">SeveralHash</button></NavLink>
        </div>
      </header>
    </div>
  );
}

export default App;