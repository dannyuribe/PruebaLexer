import React, { useState } from "react";
import "./login.css";

const Login = (props) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    valido: false,
  });

  const handleLoginChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.onLogin(login);
  };

  return (
    <div className="login-card">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={login.email}
            onChange={handleLoginChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={login.password}
            onChange={handleLoginChange}
          />
        </div>
        <button>Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
