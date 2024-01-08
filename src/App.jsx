import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './components/assets/react.svg'
import './App.css'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <Container className='main '>
      <div className='d-flex  justify-content-center mt-5'>
      <h1 className='text-center'>
        Formulario React
      </h1>
          <img src={reactLogo} className="logo ms-2" alt="React logo" />
      </div>
    </Container>
      <Footer/>
    </>
  )
}

export default App
