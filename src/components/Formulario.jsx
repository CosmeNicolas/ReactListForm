import { useState } from 'react';
import { Form , Button} from 'react-bootstrap';

const Formulario = () => {

  const [DatoFormulario, setDatoFormulario] = useState({nombre:'', apellido:'', dni:'',email:''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatoFormulario({ ...DatoFormulario, [name]: value });
  };
  
  const handleSubmit = (e)=>{
    e.preventDeault();
    console.log('desde el formulario')
    const {nombre,apellido,dni,email} = DatoFormulario

    if (nombre && apellido && dni && email) {
      alert('Formulario enviado con exito')
    } else {
      alert('Completa todos los campos')
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
           name='dni'
           onChange={handleChange}
           value={DatoFormulario.dni}
           required
           />
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
    </div>
 
    </>
  );
};

export default Formulario;