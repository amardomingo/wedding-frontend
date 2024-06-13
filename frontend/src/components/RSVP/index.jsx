import './RSVP.css';
import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const RSVP = () => {
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

  const handleAcompananteChange = (index, e) => {
    const { name, value } = e.target;
    const newAcompanantes = formData.acompanantes.map((acompanante, i) => {
      if (i === index) {
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
        { nombre: '', alergias: '', menu: 'infantil' },
      ],
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send form data to server
    const base_url = 'http://127.0.0.1:3001/rsvp';
    axios
      .post(base_url, formData)
      .then((response) => {
        console.log(response);
        setModalContent(response.data.iban);
        setModalVisible(true);
        // redirección a log satisfactoriamente
      })
      .catch((error) => {
        console.log(error.response);
        setModalContent("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
        setModalVisible(true);
        // redirección a un mensaje de error y que lo vuelva a intentar
      });
    console.log(JSON.stringify(formData));
    // Optionally, you can reset form fields after submission
    setFormData({
      nombre: '',
      contacto: '',
      acompanantes: [],
      alergias: '',
      alojamiento: '',
      autobus: '',
      domingo: '',
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
          <label>Nombre y Apellidos:</label>
          <input
            type="text"
            name="nombre"
            placeholder="Introduce tu nombre y apellidos"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contacto:</label>
          <input
            type="text"
            name="contacto"
            placeholder="email o número de contacto"
            value={formData.contacto}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Alergias:</label>
          <input
            type="text"
            name="alergias"
            placeholder="Preferencias alimenticias / alergias / intolerancias"
            value={formData.alergias}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Alojamiento:</label>
          <select
            name="alojamiento"
            value={formData.alojamiento}
            onChange={handleChange}
          >
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label>Autobús:</label>
          <select
            name="autobus"
            value={formData.autobus}
            onChange={handleChange}
          >
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <div className="label-container">
            <label>Domingo:</label>
            <FontAwesomeIcon icon={faInfoCircle} style={{marginLeft: 6}}/>
            <span className="tooltip">
              <h3 className="h3-form">Weeding weekend</h3>
              <p>Desde el Complejo nos ofrecen una comida para el día siguiente de la boda.</p>
              <p>2 entrantes + BBQ + Paella + Postre + Bebida -{'>'} 43€/persona (IVA no incluido)</p>
            </span>
          </div>
          <div className="select-container">
            <select name="domingo" value={formData.domingo} onChange={handleChange}>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <button type="button" onClick={addAcompanante}>
          Añadir Acompañante
        </button>
        {formData.acompanantes.map((acompanante, index) => (
          <div className="acompanante-container" key={index}>
            <h4>Acompañante {index + 1}</h4>
            <div>
              <label>Nombre y Apellidos:</label>
              <input
                type="text"
                name="nombre"
                placeholder="Introduce tu nombre"
                value={acompanante.nombre}
                onChange={(e) => handleAcompananteChange(index, e)}
                required
              />
            </div>
            <div>
              <label>Alergias:</label>
              <input
                type="text"
                name="alergias"
                placeholder="Preferencias alimenticias / alergias / intolerancias"
                value={acompanante.alergias}
                onChange={(e) => handleAcompananteChange(index, e)}
                required
              />
            </div>
            <div>
              <label>Menú:</label>
              <select
                name="menu"
                value={acompanante.menu}
                onChange={(e) => handleAcompananteChange(index, e)}
                required
              >
                <option value="infantil">Infantil</option>
                <option value="adulto">Adulto</option>
                <option value="vegano">Vegano</option>
              </select>
            </div>
          </div>
        ))}
        <button className="button-submit" type="submit">
          Enviar
        </button>
      </form>
      {modalVisible && (
        <div className="modal-backdrop">
          <div className="modal">
            <div className="modal-content">
              <p>Tus datos han sido recibidos correctamente.</p>
              <p>El mejor regalo es que paséis este día con nosotros, pero si aún así queréis echarnos una mano, podéis hacerlo aquí:</p>
              <p>{modalContent}</p>
            </div>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RSVP;
