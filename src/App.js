import './App.css';
import Login from './containers/Login/login';
import { Routes, Route } from 'react-router-dom';
import Header from './containers/header/header';
import Cripto from './containers/Cripto/Cripto';
import CriptoDetalle from './containers/Cripto/CriptoDetalle';
import Home from './containers/Home/home'
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(login) {
    if (login.email === 'danny.uribeh@gmail.com' && login.password === 'q') {
      setIsLoggedIn(true);
      console.log("Consulta la api login");
      localStorage.setItem("token", "nfsbfshbf");
      localStorage.setItem("Usuario", "User:XXX,Id:1");
    }
  }

  return (
    <div className="App">
      {isLoggedIn && (
        <>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cripto" element={<Cripto />} />
            <Route path="/cripto/:id" element={<CriptoDetalle />} />
          </Routes>
        </>
      )}
      {!isLoggedIn && (
        <>
          <Routes>
            <Route exact path="/" element={<Login onLogin={handleLogin} />} />
          </Routes>
        </>
      )}
    </div>
  );
}
export default App;