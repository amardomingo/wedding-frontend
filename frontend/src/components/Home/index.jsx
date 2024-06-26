import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import weddingImage from './../../assets/home.jpeg';


const Home = () => {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : '0px';
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className="home">
      <div className="image">
        <img src={weddingImage} alt="imagen de los novios con la alhambra de fondo" />
      </div>
      <div className="welcome-page">
        <h1>¡Bienvenidos a nuestra boda!</h1>
        <p>En esta web hemos reunido la información necesaria para nuestro día.</p>
        <button className={`accordion-button ${active}`} onClick={toggleAccordion}>
          <div>
            <div className="faq-section">
              <h2 className="h2-home">El evento</h2>
              <FontAwesomeIcon icon={faPlus} className={active ? `question-icon rotate` : `question-icon`} />
            </div>
            <div className={active ? `accordion-content answer-divider` : `accordion-content`} ref={contentRef}>
              <h3 className="h3-home">Cuándo</h3>
              <p>La ceremonia comenzará a las 18:00, para luego pasar a un cocktail, la cena y el baile.</p>
              <h3 className="h3-home">Dónde</h3>
              <p>Tenéis toda la información sobre el lugar en el apartado de <Link to="/location">localización</Link>.
              </p>
              <h3 className="h3-home">Quienes</h3>
              <p>Esperamos que vosotros! Por favor, rellenad vuestros datos en el apartado de <Link to="/rsvp">confirmación
                de asistencia</Link> para que sepamos que venís.</p>
            </div>
          </div>
        </button>
        <button className={`accordion-button ${active}`} onClick={toggleAccordion}>
          <div>
            <div className="faq-section">
              <h2 className="h2-home">Más información</h2>
              <FontAwesomeIcon icon={faPlus} className={active ? `question-icon rotate` : `question-icon`} />
            </div>
            <div className={active ? `accordion-content answer-divider` : `accordion-content`} ref={contentRef}>
              <h3 className="h3-home">Alojamiento</h3>
              <p>En la propia finca hay disponible alojamiento, en forma de bungalows. Hay más información en <Link
                to="https://www.complejolaciguena.com/bungalows-madrid/">su web.</Link></p>
              <p>Si os interesa quedaros, marcarlo en el formulario, tenéis un 10% de descuento por asistir a nuestra
                boda. Hemos reservado 10 bungalows que tenemos que confirmar antes de Septiembre.</p>
              <h3 className="h3-home">Planes de domingo</h3>
              <p>Si habéis decidido quedaros a dormir, o si os va la marcha, el restaurante de la finca ofrece la
                posibilidad de comer todos juntos.</p>
              <p>Si os interesa, marcad la opción en el formulario y nos pondremos en contacto con vosotros con los
                detalles.</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
