import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Container} from 'react-bootstrap'
import TituloFormulario from './components/TituloFormulario'
import Footer from './components/Footer'
import Formulario from './components/Formulario';

function App() {
 

  return (
    <>
    <Container className='main '>
      <TituloFormulario />
      <Formulario/>
    </Container>
      <Footer/>
    </>
  )
}

export default App
