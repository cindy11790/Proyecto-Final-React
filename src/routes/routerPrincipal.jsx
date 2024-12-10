import Home from "../pages/Home";
import Login from "../pages/Login";
import Simulador from "../pages/Simulador";
import Estadisticas from "../pages/Estadisticas";
import Historial from "../pages/Historial";
import Calculo from "../pages/Calculo";
import Registro from "../pages/Registro";


export let router = [ //se puede exportar arriba o abajo con export default//
    {
        path: '/',   //la ruta principal es el / solo, osea el home es la ruta principal//
        element: <Home />
    },
    {
        path: '/simulador',
        element: <Simulador />
    },
    {
        path: '/login',
        element:  <Login />
    },
    {
        path: '/Estadisticas',
        element: <Estadisticas />
    },
    {
        path: '/Historial',
        element: <Historial />
    },
    {
        path: '/Calculo',
        element: <Calculo />
    },
    {
        path: '/Registro',
        element: <Registro />
    },
    
]
