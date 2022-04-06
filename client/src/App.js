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
        <div class="animated-title">
          <div class="text-top">
            <div><span>Welcome on</span></div>
          </div>
          <div class="text-bottom">
            <div>GPUCrack</div>
          </div>
        </div>
        <div className="welcome">
          <NavLink to="/onehash"><button class="button-1" role="button" >One hash</button></NavLink>
          <NavLink to="/result"><button class="button-2" role="button">Several hash</button></NavLink>
        </div>
        
      </header>
    </div>
  );
}

export default App;
