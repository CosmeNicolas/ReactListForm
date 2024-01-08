import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Container} from 'react-bootstrap'
import reactLogo from './components/assets/react.svg'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <Container className='main '>
      <div className='d-flex  justify-content-center mt-5'>
          <img src={reactLogo} className="logo me-2 mb-2" alt="React logo" />
      <h1 className='text-center'>
        Formulario React
      </h1>
          <img src={reactLogo} className="logo ms-2 mb-2" alt="React logo" />
      </div>
    </Container>
      <Footer/>
    </>
  )
}

export default App
