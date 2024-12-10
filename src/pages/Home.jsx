import Header from "../components/Header";
import './Home.css';
const Home = () => {
  return (
    <div>
      <Header />
      <div className="contenedorTiger">
        {/* <img  className="tiger" src="../public/img/tiger_tall-removebg-preview.png" alt=""/> */}
      </div>
    <div className="links">
    <ul className="links__list" style={{ "--item-total": 5 }}>
         <li className="links__item" style={{ "--item-count": 1 }}>
            <a className="links__link" href="../pages/calculo.html">
                {/* <img className="links__icon" src="../public/img/insolvencia.png" alt=""/> */}
                <span className="links__text">Liquidar</span>
            </a>
          </li>
          <li className="links__item" style={{ "--item-count": 2 }}>
            <a className="links__link" href="../pages/registro.html">
                {/* <img className="links__icon" src="../public/img/gente.png" alt=""/> */}
                <span className="links__text">Registrar</span></a>
          </li>
          <li className="links__item" style={{ "--item-count": 3 }}>
            <a className="links__link" href="../pages/empleados.html">
                {/* <img className="links__icon" src="../public/img/empleados.png" alt=""/> */}
                <span className="links__text">Empleados</span></a>
          </li>
          <li className="links__item" style={{ "--item-count": 4 }}>
            <a className="links__link" href="../pages/historial.html">
                {/* <img className="links__icon" src="../public/img/historial-de-transacciones.png" alt=""/> */}
                <span className="links__text">Historial de Transacciones</span></a>
          </li>
          <li className="links__item" style={{ "--item-count": 5 }}>
            <a className="links__link" href="../pages/estadisticas.html">
                {/* <img className="links__icon" src="../public/img/estadisticas.png" alt=""/> */}
                <span className="links__text">Estadisticas</span></a>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Home;//un componente siempre debe tener una exportacion por defecto//