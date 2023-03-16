import React, { Component } from "react";
import { Link } from "react-router-dom";
import HttpService from '../../../services/HttpService'
import './TablaCripto.css';

class TablaCripto extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      cryptos: []
    }
    this.cargarDatosTabla = this.cargarDatosTabla.bind(this);
    this.consultarCripto = this.consultarCripto.bind(this);
  }

  componentDidMount() {
    this.consultarCripto();
  }

  consultarCripto() {
    HttpService.Get('api/tickers/')
    .then((result)=>{
      this.setState({ cryptos: result.data.data });
    })
    .catch((error)=>{
      console.log("error: " + error);
    });
  }

  cargarDatosTabla() {
    return this.state.cryptos.map((dato, index) => {
      return (
        <tr key={index}>
          <td><Link to={`/cripto/${dato.id}`}>{dato.id}</Link></td>
          <td>{dato.name}</td>
          <td>{dato.symbol}</td>
          <td>{dato.price_usd}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table className="table-cripto">
        <thead>
          <tr>
            <th>Detalle</th>
            <th>Nombre</th>
            <th>simbolo</th>
            <th>precio USD</th>
          </tr>
        </thead>
        <tbody>{this.cargarDatosTabla()}</tbody>
      </table>
    );
  }
}

export default TablaCripto;