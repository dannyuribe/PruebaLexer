import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CriptoDetalleTarjeta from '../../components/Tarjetas/CriptoDetalleTarjeta';
import HttpService from '../../services/HttpService';


function CriptoDetalle() {
  const [crypto, setCrypto] = useState({});
  const { id } = useParams();
  useEffect(() => {
    consultarCripto();
  }, []);

  const consultarCripto = () => {
    console.log();
    HttpService.Get('api/ticker/', {id:id})
      .then((result) => {
        setCrypto(result.data[0]);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }
  
  return (
    <div>
      <h1>Cripto Moneda </h1>
      <Link to={'/cripto'}>Regresar</Link>
      <CriptoDetalleTarjeta cryptoOut={crypto}/>
    </div>
  );
}

export default CriptoDetalle;