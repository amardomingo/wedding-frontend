import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import './Home.css';
import weddingImage from '../../assets/home.webp';
import preciosPDF from '../../assets/tarifas.pdf';

function Home() {
  const [activeSections, setActiveSections] = useState({
    event: false,
    information: false,
  });

  const contentRefs = {
    event: useRef(null),
    information: useRef(null),
  };

  const [ibanState, setIbanState] = useState(null);

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

  const showIBAN = () => {
    const baseUrl = `${import.meta.env.VITE_API_URL}`;

    axios
      .get(`${baseUrl}/iban`)
      .then((response) => {
        setIbanState(`IBAN: ${response.data.iban}`);
      })
      .catch(() => {
        setIbanState('Se ha producido un error, intentalo más tarde');
      });
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
            type="button"
            className={`accordion-button ${activeSections.event ? 'active' : ''}`}
            onClick={() => toggleAccordion('event')}
          >
            <div className="faq-section">
              <h2 className="h2-home">El evento</h2>
              <FontAwesomeIcon
                icon={faPlus}
                className={
                  activeSections.event
                    ? 'question-icon rotate'
                    : 'question-icon'
                }
              />
            </div>
          </button>
          {activeSections.event && (
            <div
              className={
                activeSections.event
                  ? 'accordion-content answer-divider'
                  : 'accordion-content'
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
                Esperamos que vosotros! Por favor, rellenad vuestros datos en el
                apartado de <Link to="/rsvp">confirmación de asistencia</Link>{' '}
                para que sepamos que venís.
              </p>
            </div>
          )}
        </div>
        <div className="details-buttons">
          <button
            type="button"
            className={`accordion-button ${activeSections.information ? 'active' : ''}`}
            onClick={() => toggleAccordion('information')}
          >
            <div className="faq-section">
              <h2 className="h2-home">Más información</h2>
              <FontAwesomeIcon
                icon={faPlus}
                className={
                  activeSections.information
                    ? 'question-icon rotate'
                    : 'question-icon'
                }
              />
            </div>
          </button>
          {activeSections.information && (
            <div
              className={
                activeSections.information
                  ? 'accordion-content answer-divider'
                  : 'accordion-content'
              }
              ref={contentRefs.information}
            >
              <h3 className="h3-home">Alojamiento</h3>
              <p>Si os interesa quedaros, marcarlo en el formulario. </p>
              <p>
                <span className="highlight">
                  En la propia finca ya no queda alojamiento disponible.
                </span>{' '}
                <Link
                  to="https://www.complejolaciguena.com/bungalows-madrid/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></Link>
              </p>
              <p>
                En caso de que sean necesarios más alojamientos, estamos en
                contacto con el{' '}
                <Link
                  to="https://www.hotel-bb.com/es/hotel/madrid-arganda?gps%5Bvalue%5D=40.3064291%2C-3.4471723&gps%5Bdistance%5D%5Bfrom%5D=10&bounds=%7B%22south%22%3A40.2892888%2C%22west%22%3A-3.4907462%2C%22north%22%3A40.3215092%2C%22east%22%3A-3.4251274%2C%22type%22%3A%22locality%22%7D&loc_country=ES&arrival_date=10%2F05%2F2024&departure_date=10%2F06%2F2024&destination=Arganda+del+Rey&internal_keywords=Arganda+del+Rey&viewport=1460x460&r1_ad=2&currency_code=EUR#rooms-block-scroll"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  hotel B&B de Arganda del Rey.
                </Link>{' '}
                Pondremos un autobús para ir y volver del hotel al complejo.
                Intentaremos negociar con ellos algún descuento en función de
                cuantas habitaciones sean necesarias.
              </p>
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
              <h3>Regalos</h3>
              <p>
                El mejor regalo es que paséis este día con nosotros, pero si aun
                así queréis echarnos una mano, podéis hacerlo aquí:
              </p>
              <div className="iban-number">
                {ibanState ? (
                  <p>{ibanState}</p>
                ) : (
                  <button
                    type="button"
                    className="iban-button"
                    onClick={showIBAN}
                  >
                    Mostrar IBAN
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
