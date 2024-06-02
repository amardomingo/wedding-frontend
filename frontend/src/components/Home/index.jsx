import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="welcome-page">
      <h1>¡Bienvenidos a nuestra boda!</h1>
      <p>En esta web hemos reunido la informacion sobre la boda que vamos a celebrar</p>
      <h2>El evento</h2>
      <h3>Cuando</h3>
      <p>La ceremonia comenzara a las 18:00, para luego pasar a un cocktail, la cena y el baile</p>
      <h3>Donde</h3>
      <p>Teneis toda la informacion sobre el lugar en el apartado de <Link to="/location">localizacion</Link></p>
      <h3>Quienes</h3>
      <p>Esperamos que vosotros! Por favor, rellenad vuestros datos en el apartado de <Link to="/rsvp">confirmacion de asistencia</Link> para que sepamos que venis</p>
      <h2>Mas informacion</h2>
      <h3>Alojamiento</h3>
      <p>En la propia finca hay disponible alojamiento, en forma de bungalows. Hay mas informacion en <Link to="https://www.complejolaciguena.com/bungalows-madrid/">su web</Link></p>
      <p>Si os interesa quedaros, marcadnoslo en el formulario, teneis un 10% de descuento por asistir a nuestra boda. Hemos reservado 10 bungalows que tenemos que confirmar antes de Septiembre</p>
      <h3>Planes de domingo</h3>
      <p>Si habeis decidido quedaros a dormir, o si os va la marcha, el restaurante de la finca ofrece la posibilidad de comer todos juntos</p>
      <p>Si os interesa, marcad la opcion en el formulario y nos pondremos en contacto con vosotros con los detalles</p>
    </div>
  )
};

export default Home;
