import React from "react";
import './SeveralHash.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from "./Header";
import $ from 'jquery';

$(document).ready(function () {
  $("form input").change(function () {
    $("form p").text(this.files.length + " file(s) selected");
  });
});

function OneHash() {
  const [dataReturn, setDataReturn] = React.useState(null);
  const [inputHash, setInputHash] = React.useState('');
  let navigate = useNavigate();

  function postHash() {
    navigate('/loading')
    if (isHash()) {
        axios
          .post('/postHash', {hash: inputHash})
          .then((response) => {
            console.log(response.data.message);
            setDataReturn(response.data.message);
            if (dataReturn === 'not_found') {
              navigate('/statistiques');
            }else{
              localStorage.setItem("pwd",response.data.message);
              navigate('/result')
            } 
          })
          .catch(err => {
            console.error(err);
          });
    }
  }
  

  function isHash() {
    localStorage.setItem("error_type","wrong hash");
    return true;
  }

  return (
    <div className="App">
      <Header/>
      <header className="App-heade">
        <div class="hash">
          <div class="top">            
            <h3>Enter a file of hashCode </h3>
          </div>
            <form>
              <input type="file" multiple/>
                <p>Drag your file here or click in this area.</p>
                <button type="submit" onClick={postHash}>Upload</button>
              </form>
        </div>
      </header>
    </div>
  );
}
 export default OneHash;