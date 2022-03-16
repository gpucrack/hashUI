import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Statistiques from './Statistiques';
import OneHash from './OneHash';
import Result from './Result';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/statistiques" element={<Statistiques />} />
      <Route path="/onehash" element={<OneHash/>}/>
      <Route path="/result" element={<Result/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
