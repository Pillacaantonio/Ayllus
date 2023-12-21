import { Route, Routes } from 'react-router-dom';
import Carta from './Carta';
import Historia from './Historia';
import Equipo from './Equipo';
import Contactanos from './Contactanos';
import Inicio from './Inicio';
import Menu from './Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio/>} ></Route>
        <Route path="/carta" element={<Carta />}></Route>
        <Route path="/equipo" element={<Equipo />} ></Route>
        <Route path="/historia" element={<Historia />} ></Route>
        <Route path="/contactanos" element={<Contactanos />} ></Route>
      </Routes>
    </div>
  );
}

export default App;