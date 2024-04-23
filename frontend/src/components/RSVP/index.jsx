import "./RSVP.css";
import avatar from "../../assets/avatar.png";
import { Component } from "react";
import axios from "axios";

export default class RSVP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      acompanante: "",
      preferencias: "",
      alojamiento: "",
      autobus: "",
      contacto: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const base_url = "http://127.0.0.1:3001/rsvp";
    const {
      nombre,
      acompanante,
      preferencias,
      alojamiento,
      autobus,
      contacto,
    } = this.state;
    const data = {
      nombre,
      acompanante,
      preferencias,
      alojamiento,
      autobus,
      contacto,
    };
    axios
      .post(base_url, data)
      .then((response) => {
        console.log(response);
        // redirección a log satisfactoriamente
      })
      .catch((error) => {
        console.log(error.response);
        // redirección a un mensaje de error y que lo vuelva a intentar
      });
    console.log(JSON.stringify(data));
  };

  render() {
    return (
      <div className="container">
        <img src={avatar} alt="avatar by flaticon" className="avatar" />
        <div className="title">Formulario RSVP</div>
        <div className="content">
          <form onSubmit={this.handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <label className="details">Nombre</label>
                <input
                  type="text"
                  className="inputbox"
                  placeholder="Introduce tu nombre"
                  name="nombre"
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="input-box">
                <label className="details">Necesitas alojamiento</label>
                <select
                  className="inputbox"
                  name="alojamiento"
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="button">
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
