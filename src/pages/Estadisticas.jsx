import Header from "../components/Header";
import './Estadisticas.css';

const Estadisticas = () => {
    return (
        <section>
            <Header />

            <header className="cabecera">
                <div className="logo">
                    {/* <img src="../public/img/logoConTrigre.png" alt=""/> */}
                </div>
                <nav class="menu">
                    <ul>
                        <li><a href="../pages/home.html"><b>Home</b></a></li>
                        <li><a href="../pages/calculo.html"><b>Liquidacion</b></a></li>
                        <li><a href="../pages/registro.html"><b>Registro</b></a></li>
                        <li><a href="../pages/historial.html"><b>Historial</b></a></li>
                        <li><a href="../pages/estadisticas.html"><b>Estadisticas</b></a></li>
                    </ul>
                </nav>
            </header>

            <h1> Estadísticas de Liquidaciones Anuales </h1>

            <div className="stats-container">
                <div className="stat-bar">
                    <label>Enero</label>
                    <div className="progress">
                        <div className="progress-bar" style={{ width: '80%' }}>80%</div>
                    </div>
                </div>
                <div className="stat-bar">
                    <label>Febrero</label>
                    <div className="progress">
                    <div className="progress-bar" style={{ width: '60%' }}>60%</div>
                    </div>
                </div>
                <div className="stat-bar">
                    <label>Marzo</label>
                    <div className="progress">
                    <div className="progress-bar" style={{ width: '75%' }}>75%</div>
                    </div>
                </div>
                <div className="stat-bar">
                    <label>Abril</label>
                    <div className="progress">
                    <div className="progress-bar" style={{ width: '90%' }}>90%</div>
                    </div>
                </div>
                <div className="stat-bar">
                    <label>Mayo</label>
                    <div className="progress">
                    <div className="progress-bar" style={{ width: '85%' }}>85%</div>
                    </div>
                </div>
                <div className="stat-bar">
                    <label>Junio</label>
                    <div className="progress">
                    <div className="progress-bar" style={{ width: '70%' }}>70%</div>
                    </div>
                </div>
                <div className="stat-bar">
                    <label>Julio</label>
                    <div className="progress">
                    <div className="progress-bar" style={{ width: '95%' }}>95%</div>
                    </div>
                </div>
                <div className="stat-bar">
                    <label>Agosto</label>
                    <div className="progress">
                    <div className="progress-bar" style={{ width: '60%' }}>60%</div>
                    </div>
                </div>
                <div className="stat-bar">
                    <label>Septiembre</label>
                    <div className="progress">
                    <div className="progress-bar" style={{ width: '80%' }}>80%</div>
                    </div>
                </div>
                <div className="stat-bar">
                    <label>Octubre</label>
                    <div className="progress">
                    <div className="progress-bar" style={{ width: '90%' }}>90%</div>
                    </div>
                </div>
                <div className="stat-bar">
                    <label>Noviembre</label>
                    <div className="progress">
                    <div className="progress-bar" style={{ width: '65%' }}>65%</div>
                    </div>
                </div>
                <div className="stat-bar">
                    <label>Diciembre</label>
                    <div className="progress">
                    <div className="progress-bar" style={{ width: '85%' }}>85%</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Estadisticas;