import "./RSVP.css";
import avatar from "../../assets/avatar.png";
import axios from "axios";
import { useState } from "react";

const RSVP = () => {
  // Define state variables to hold form data
  const [formData, setFormData] = useState({
    nombre: "",
    acompanante: "",
    preferencias: "",
    alojamiento: "",
    autobus: "",
    contacto: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send form data to server
    const base_url = "http://127.0.0.1:3001/rsvp";
    axios
      .post(base_url, formData)
      .then((response) => {
        console.log(response);
        // redirección a log satisfactoriamente
      })
      .catch((error) => {
        console.log(error.response);
        // redirección a un mensaje de error y que lo vuelva a intentar
      });
    console.log(JSON.stringify(formData));
    // Optionally, you can reset form fields after submission
    setFormData({
      nombre: "",
      acompanante: "",
      preferencias: "",
      alojamiento: "",
      autobus: "",
      contacto: "",
    });
  };

  return (
    <div className="container">
      <img src={avatar} alt="avatar by flaticon" className="avatar" />
      <div className="title">Formulario RSVP</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <label className="details">Nombre</label>
              <input
                type="text"
                className="inputbox"
                placeholder="Introduce tu nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <label className="details">Acompañantes</label>
              <input
                type="text"
                className="inputbox"
                placeholder="Acompañante"
                name="acompanante"
                value={formData.acompanante}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <label className="details">Preferencias alimenticias</label>
              <input
                type="text"
                className="inputbox"
                placeholder="Preferencias alimenticias / alergias / intolerancias"
                name="preferencias"
                value={formData.preferencias}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <label className="details">Necesitas alojamiento</label>
              <select
                className="inputbox"
                name="alojamiento"
                onChange={handleInputChange}
              >
                <option value="SI"> SI </option>
                <option defaultValue value="NO">
                  {" "}
                  NO{" "}
                </option>
              </select>
            </div>
            <div className="input-box">
              <label className="details">Necesitas autobús</label>
              <select
                className="inputbox"
                name="autobus"
                onChange={handleInputChange}
              >
                <option value="SI"> SI </option>
                <option defaultValue value="NO">
                  {" "}
                  NO{" "}
                </option>
              </select>
            </div>
            <div className="input-box">
              <label className="details">Contacto</label>
              <input
                type="text"
                className="inputbox"
                placeholder="email o número de contacto"
                name="contacto"
                value={formData.contacto}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="button">
            <button type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RSVP;
