import React from "react";
import "./CriptoDetalleTarjeta.css"; 

function CriptoDetalleTarjeta(props) {
  return (
    <div className="card">
      <div>
        <label htmlFor="">id: {props.cryptoOut.id}</label>
      </div>
      <div>
        <label htmlFor="">Nombre: {props.cryptoOut.name}</label>
      </div>
      <div>
        <label htmlFor="">Simbolo: {props.cryptoOut.symbol}</label>
      </div>
      <div>
        <label htmlFor="">Precio BTC: {props.cryptoOut.price_btc}</label>
      </div>
      <div>
        <label htmlFor="">Precio USD: {props.cryptoOut.price_usd}</label>
      </div>
    </div>
  );
}

export default CriptoDetalleTarjeta;