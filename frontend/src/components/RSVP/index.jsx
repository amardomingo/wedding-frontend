import axios from 'axios';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import './RSVP.css';

function RSVP() {
  // Define state variables to hold form data
  const [formData, setFormData] = useState({
    nombre: '',
    contacto: '',
    acompanantes: [],
    alergias: '',
    alojamiento: 'no',
    autobus: 'no',
    domingo: 'no',
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAcompananteChange = (aid, e) => {
    const { name, value } = e.target;
    const newAcompanantes = formData.acompanantes.map((acompanante) => {
      if (acompanante.id === aid) {
        return { ...acompanante, [name]: value };
      }
      return acompanante;
    });
    setFormData({ ...formData, acompanantes: newAcompanantes });
  };

  const addAcompanante = () => {
    setFormData({
      ...formData,
      acompanantes: [
        ...formData.acompanantes,
        {
          nombre: '',
          alergias: '',
          menu: 'infantil',
          id: formData.acompanantes.length + 1,
        },
      ],
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const baseUrl = `${import.meta.env.VITE_API_URL}`;
    const message = `<p>Tus datos han sido recibidos correctamente.</p>
    <p>
      El mejor regalo es que paséis este día con nosotros, pero si aun
      así queréis echarnos una mano, podéis hacerlo aquí:
    </p>`;
    axios
      .post(`${baseUrl}/rsvp`, formData)
      .then((response) => {
        setModalContent(message + response.data.iban);
        setModalVisible(true);
      })
      .catch(() => {
        setModalContent('Ha ocurrido un error. Por favor, inténtalo de nuevo.');
        setModalVisible(true);
      });
    setFormData({
      nombre: '',
      contacto: '',
      acompanantes: [],
      alergias: '',
      alojamiento: 'no',
      autobus: 'no',
      domingo: 'no',
    });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="form-container">
      <h2 className="h2-form">Formulario de Asistencia</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombreInput">
            Nombre y Apellidos:{' '}
            <input
              id="nombreInput"
              type="text"
              name="nombre"
              placeholder="Introduce tu nombre y apellidos"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="contacto">
            Contacto:{' '}
            <input
              id="contacto"
              type="text"
              name="contacto"
              placeholder="email o número de contacto"
              value={formData.contacto}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="alergias">
            Alergias:{' '}
            <input
              id="alergias"
              type="text"
              name="alergias"
              placeholder="Preferencias alimenticias / alergias / intolerancias"
              value={formData.alergias}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="alojamiento">
            Alojamiento:{' '}
            <select
              id="alojamiento"
              name="alojamiento"
              value={formData.alojamiento}
              onChange={handleChange}
            >
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="autobus">
            Autobús:{' '}
            <select
              id="autobus"
              name="autobus"
              value={formData.autobus}
              onChange={handleChange}
            >
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
        <div>
          <div className="label-container">
            <label htmlFor="domingo">
              ¿Te quedas el domingo?:
              <FontAwesomeIcon icon={faInfoCircle} style={{ marginLeft: 6 }} />
              <span id="domingo" className="tooltip">
                <h3 className="h3-form">Weeding weekend</h3>
                <p>
                  Desde el Complejo nos ofrecen una comida para el día siguiente
                  de la boda.
                </p>
                <p>
                  2 entrantes + BBQ + Paella + Postre + Bebida -{'>'}{' '}
                  <b>43€/persona</b> (IVA no incluido)
                </p>
              </span>
            </label>
          </div>
          <div className="select-container">
            <select
              name="domingo"
              value={formData.domingo}
              onChange={handleChange}
            >
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        {formData.acompanantes.map((acompanante) => (
          <div className="acompanante-container" key={acompanante.id}>
            <h4>Acompañante {acompanante.id}</h4>
            <div>
              <label htmlFor="nombreInput">
                Nombre y Apellidos:{' '}
                <input
                  id="nombreInput"
                  type="text"
                  name="nombre"
                  placeholder="Introduce tu nombre"
                  value={acompanante.nombre}
                  onChange={(e) => handleAcompananteChange(acompanante.id, e)}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="alergias">
                Alergias:{' '}
                <input
                  id="alergias"
                  type="text"
                  name="alergias"
                  placeholder="Preferencias alimenticias / alergias / intolerancias"
                  value={acompanante.alergias}
                  onChange={(e) => handleAcompananteChange(acompanante.id, e)}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="menu">
                Menú:{' '}
                <select
                  id="menu"
                  name="menu"
                  value={acompanante.menu}
                  onChange={(e) => handleAcompananteChange(acompanante.id, e)}
                  required
                >
                  <option value="infantil">Infantil</option>
                  <option value="adulto">Adulto</option>
                  <option value="vegano">Vegano</option>
                </select>
              </label>
            </div>
          </div>
        ))}
        <button type="button" className="button-rsvp" onClick={addAcompanante}>
          Añadir Acompañante
        </button>
        <button className="button-rsvp button-submit" type="submit">
          Enviar
        </button>
      </form>
      {modalVisible && (
        <div className="modal-backdrop">
          <div className="modal">
            <div
              className="modal-content"
              dangerouslySetInnerHTML={{ __html: modalContent }}
            />
            <button
              className="button-rsvp button-close"
              type="button"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RSVP;
