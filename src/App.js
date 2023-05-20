import './App.css';
import NavBar from './componentes/Nav';
import SobreNos from './componentes/sobre-nosotros';
import Productos from './componentes/productos';
import Maps from './componentes/maps';
import Contacto from './componentes/contacto';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SobreNos />
      <Productos />
      <Maps />
      <Contacto />
    </div>
  );
}

export default App;
