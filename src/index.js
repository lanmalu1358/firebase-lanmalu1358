import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import CreateUser from './pages/CreateUser';

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/pages/main" element={<Main/>} />
        <Route exact path="/pages/createuser" element={<CreateUser/>} />
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
