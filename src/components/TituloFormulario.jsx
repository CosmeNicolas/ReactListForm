import reactLogo from './assets/react.svg'

const TituloFormulario = () => {
  return (
      <div className='d-flex  justify-content-center mt-5'>
        <img src={reactLogo} className="logo me-2 mb-2" alt="React logo" />
        <h1 className='text-center'>
          Formulario React
        </h1>
        <img src={reactLogo} className="logo ms-2 mb-2" alt="React logo" />
      </div>
  );
};

export default TituloFormulario;