import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

import './Home.css';
import weddingImage from './../../assets/home.jpeg';
import preciosPDF from './../../assets/tarifas.pdf';

const Home = () => {
  const [activeSections, setActiveSections] = useState({
    event: false,
    information: false,
  });

  const contentRefs = {
    event: useRef(null),
    information: useRef(null),
  };

  useEffect(() => {
    Object.keys(contentRefs).forEach((key) => {
      const contentRef = contentRefs[key].current;
      if (contentRef) {
        contentRef.style.maxHeight = activeSections[key]
          ? `${contentRef.scrollHeight}px`
          : '0px';
      }
    });
  }, [activeSections, contentRefs]);

  const toggleAccordion = (section) => {
    setActiveSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="home">
      <div className="image">
        <img
          src={weddingImage}
          alt="imagen de los novios con la alhambra de fondo"
        />
      </div>
      <div className="content">
        <div className="welcome-page">
          <h1>¡Bienvenidos a nuestra boda!</h1>
          <p>
            En esta web hemos reunido la información necesaria para nuestro día.
          </p>
        </div>
        <div className="details-buttons">
          <button
            className={`accordion-button ${activeSections.event ? 'active' : ''}`}
            onClick={() => toggleAccordion('event')}
          >
            <div>
              <div className="faq-section">
                <h2 className="h2-home">El evento</h2>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={
                    activeSections.event
                      ? `question-icon rotate`
                      : `question-icon`
                  }
                />
              </div>
              <div
                className={
                  activeSections.event
                    ? `accordion-content answer-divider`
                    : `accordion-content`
                }
                ref={contentRefs.event}
              >
                <h3 className="h3-home">Cuándo</h3>
                <p>
                  La ceremonia será el 5 de Octubre de 2024 a las 18:00. Después
                  pasaremos al cocktail, la cena y el baile.
                </p>
                <h3 className="h3-home">Dónde</h3>
                <p>
                  Tenéis toda la información sobre el lugar en el apartado de{' '}
                  <Link to="/location">localización</Link>.
                </p>
                <h3 className="h3-home">Quienes</h3>
                <p>
                  Esperamos que vosotros! Por favor, rellenad vuestros datos en
                  el apartado de{' '}
                  <Link to="/rsvp">confirmación de asistencia</Link> para que
                  sepamos que venís.
                </p>
              </div>
            </div>
          </button>

          <button
            className={`accordion-button ${activeSections.information ? 'active' : ''}`}
            onClick={() => toggleAccordion('information')}
          >
            <div>
              <div className="faq-section">
                <h2 className="h2-home">Más información</h2>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={
                    activeSections.information
                      ? `question-icon rotate`
                      : `question-icon`
                  }
                />
              </div>
              <div
                className={
                  activeSections.information
                    ? `accordion-content answer-divider`
                    : `accordion-content`
                }
                ref={contentRefs.information}
              >
                <h3 className="h3-home">Alojamiento</h3>
                <p>
                  En la propia finca hay disponible alojamiento (bungalows). Hay
                  más información en{' '}
                  <Link to="https://www.complejolaciguena.com/bungalows-madrid/">
                    su web
                  </Link>
                </p>
                <p>
                  Si os interesa quedaros, marcarlo en el formulario, tenéis un
                  10% de descuento por asistir a nuestra boda. Hemos reservado
                  10 bungalows que tenemos que confirmar antes de Septiembre.
                </p>
                <p>
                  Los precios los tenéis disponibles{' '}
                  <a
                    href={preciosPDF}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    aquí
                  </a>
                  .
                </p>{' '}
                <h3 className="h3-home">Planes de domingo</h3>
                <p>
                  Si habéis decidido quedaros a dormir, o si os va la marcha, el
                  restaurante de la finca ofrece la posibilidad de comer todos
                  juntos.
                </p>
                <p>
                  Si os interesa, marcad la opción en el formulario y nos
                  pondremos en contacto con vosotros con los detalles.
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
