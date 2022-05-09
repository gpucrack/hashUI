import React from "react";
import './SeveralHash.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from "./Header";

function SeveralHash() {
  const [dataReturn, setDataReturn] = React.useState(null);
  const [inputHash, setInputHash] = React.useState('');
  let navigate = useNavigate();

  function postHash(e) {
    if(e.keyCode ==13){
      navigate('/loading')
      if (isHash()) {
          axios
            .post('/postSevHash', {hash: inputHash})
            .then((response) => {
              console.log(response.data.password);
              setDataReturn(response.data.password);
              localStorage.setItem("pwd",response.data.password);
              console.log(response.data.time);
              setDataReturn(response.data.time);
              localStorage.setItem("time",response.data.time);
              console.log(response.data.number);
              setDataReturn(response.data.number);
              localStorage.setItem("alert",response.data.number);
              setDataReturn(response.data.end_point);
              localStorage.setItem("end_point",response.data.end_point);
              setDataReturn(response.data.t);
              localStorage.setItem("t",response.data.t);
              if(response.data.password==="-1\n"){
                navigate('/errors')
              }else{
                navigate('/results')
              }          
            })
            .catch(err => {
              console.error(err);
            });
      }else{
        navigate('/errors')
      }
    }
  }

  function postHash2() {
      navigate('/loading')
      if (isHash()) {
          axios
            .post('/postSevHash', {hash: inputHash})
            .then((response) => {
              console.log(response.data.password);
              setDataReturn(response.data.password);
              localStorage.setItem("pwd",response.data.password);
              console.log(response.data.time);
              setDataReturn(response.data.time);
              localStorage.setItem("time",response.data.time);
              console.log(response.data.number);
              setDataReturn(response.data.number);
              localStorage.setItem("alert",response.data.number);
              setDataReturn(response.data.end_point);
              localStorage.setItem("end_point",response.data.end_point);
              setDataReturn(response.data.t);
              localStorage.setItem("t",response.data.t);
              if(response.data.password==="-1\n"){
                navigate('/errors')
              }else{
                navigate('/results')
              }          
            })
            .catch(err => {
              console.error(err);
            });
      }else{
        navigate('/errors')
      }
  }

  function isHash() {
    localStorage.setItem("error_type","Wrong file");
    return true;
  }

  return (
    <div className="App">
      <Header/>
      <header className="App-heade">
        <div class="hash">
            <h3>Enter the name of the hashCode's file </h3>
            <p> </p>
            <input placeholder="Hash" class="input" value= {inputHash} onInput={e => setInputHash(e.target.value)} onKeyUp={postHash}></input>
            <p> </p>
            <p> </p>
            <input type="button" class="button" onClick={postHash2} value="Send"></input>
        </div>
      </header>
    </div>
  );
}
 export default SeveralHash;