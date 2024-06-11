import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
	return (
		<div className="welcome-page">
			<h1>¡Bienvenidos a nuestra boda!</h1>
			<p>En esta web hemos reunido la información necesaria para nuestro día.</p>
			<h2 className="h2-home">El evento</h2>
			<h3 className="h3-home">Cuándo</h3>
			<p>La ceremonia comenzará a las 18:00, para luego pasar a un cocktail, la cena y el baile.</p>
			<h3 className="h3-home">Dónde</h3>
			<p>Tenéis toda la información sobre el lugar en el apartado de <Link to="/location">localización</Link>.</p>
			<h3 className="h3-home">Quienes</h3>
			<p>Esperamos que vosotros! Por favor, rellenad vuestros datos en el apartado de <Link to="/rsvp">confirmación de asistencia</Link> para que sepamos que venís.</p>
			<h2 className="h2-home">Más información</h2>
			<h3 className="h3-home">Alojamiento</h3>
			<p>En la propia finca hay disponible alojamiento, en forma de bungalows. Hay mas información en <Link to="https://www.complejolaciguena.com/bungalows-madrid/">su web.</Link></p>
			<p>Si os interesa quedaros, marcarlo en el formulario, tenéis un 10% de descuento por asistir a nuestra boda. Hemos reservado 10 bungalows que tenemos que confirmar antes de Septiembre.</p>
			<h3 className="h3-home">Planes de domingo</h3>
			<p>Si habéis decidido quedaros a dormir, o si os va la marcha, el restaurante de la finca ofrece la posibilidad de comer todos juntos.</p>
			<p>Si os interesa, marcad la opción en el formulario y nos pondremos en contacto con vosotros con los detalles.</p>
		</div>
	)
};

export default Home;
