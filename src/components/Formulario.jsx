import { Form , Button} from 'react-bootstrap';

const Formulario = () => {
  return (
    <>
    <div className='formulario-container  my-3'>
      <Form className='py-5 px-3'>
        {/* nombre */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su Nombre" />
        </Form.Group>

        {/* Apellido */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su Apellido" />
        </Form.Group>
        {/* DNI */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nro. DNI</Form.Label>
          <Form.Control type="number" placeholder="Ingrese su DNI" />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out"/>

        </Form.Group>
          <Button variant="dark" type="submit" className='btn-submit'>
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