import { useState } from 'react';
import { Form , Button, Alert} from 'react-bootstrap';

const Formulario = () => {

  const [DatoFormulario, setDatoFormulario] = useState({nombre:'', apellido:'', dni:'',email:''});

  const [mostrarAlertaExitosa, setMostrarAlertaExitosa] = useState(false);
  const [mostrarAlertaIncompleta, setMostrarAlertaIncompleta] = useState(false);
  const [mostrarAlertaDNIInvalido, setMostrarAlertaDNIInvalido] = useState(false); // Estado y función para la alerta de DNI inválido
  const initialState = { nombre: '', apellido: '', dni: '', email: '' };


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(DatoFormulario)

    // Validar DNI
    if (name === 'dni') {
      if (!/^\d{0,8}$/.test(value)) {
        setMostrarAlertaDNIInvalido(true); // Mostrar alerta si el DNI no cumple con las condiciones
        return;
      } else {
        setMostrarAlertaDNIInvalido(false); // Ocultar alerta si el DNI es válido
      }
    }
    
    setDatoFormulario({ ...DatoFormulario, [name]: value });
  };
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log('desde el formulario')
    const {nombre,apellido,dni,email} = DatoFormulario

    

    if (nombre && apellido && dni && email) {
      setMostrarAlertaExitosa(true);
      setMostrarAlertaIncompleta(false);
      setDatoFormulario(initialState)
      // Aquí puedes agregar lógica adicional para enviar los datos si es necesario
    } else {
      setMostrarAlertaExitosa(false);
      setMostrarAlertaIncompleta(true);
    }
  }
  


  return (
    <>
    <div className='formulario-container  my-4'>
      <Form onSubmit={handleSubmit} className='py-5 px-3'>
        {/* nombre */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
          type="text"
          placeholder="Ingrese su Nombre"
          name='nombre'
          minLength={2}
          maxLength={50}
          onChange={handleChange}
          value={DatoFormulario.nombre}
          required/>
        </Form.Group>

        {/* Apellido */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
           type="text" 
           placeholder="Ingrese su Apellido"
           name='apellido'
           onChange={handleChange}
           value={DatoFormulario.apellido}
           minLength={2}
           maxLength={50}
           required
           />
        </Form.Group>
        {/* DNI */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nro. DNI</Form.Label>
          <Form.Control
           type="number" 
           placeholder="Ingrese su DNI" 
           minLength={8}
           maxLength={8}
           name='dni'
           onChange={handleChange}
           value={DatoFormulario.dni}
           required
           />
            {mostrarAlertaDNIInvalido && (
              <Alert variant="danger" className='mt-1'>
                El DNI debe contener exactamente 8 números.
              </Alert>
            )}
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email"
          placeholder="Enter email" 
          name='email'
          maxLength={254}
          onChange={handleChange}
          value={DatoFormulario.email}
          required/>
        </Form.Group>

          <Button variant="dark" type="submit" className='mt-2'>
          Enviar Fomrulario
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </Button>
        
      </Form>
        {mostrarAlertaExitosa && (
          <Alert variant="success" className='mt-3'>
            ¡El formulario se ha enviado correctamente!
          </Alert>
        )}

        {/* Alerta si faltan completar campos */}
        {mostrarAlertaIncompleta && (
          <Alert variant="danger" className='mt-3'>
            Por favor, completa todos los campos del formulario.
          </Alert>
        )}
    </div>
 
    </>
  );
};

export default Formulario;