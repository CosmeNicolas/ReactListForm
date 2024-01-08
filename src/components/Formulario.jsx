import { Form , Button} from 'react-bootstrap';

const Formulario = () => {
  return (
    <>
    <div>

      <Form>
        {/* nombre */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su Apellido" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su Apellido" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out"/>

        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar Fomrulario
        </Button>
      </Form>
    </div>
 
    </>
  );
};

export default Formulario;