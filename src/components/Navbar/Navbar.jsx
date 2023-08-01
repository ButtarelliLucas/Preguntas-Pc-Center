import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de vincular este archivo CSS

const Navbar = () => {
  return (
    <nav>
     

      <div className="navbar-container">
      <NavLink to="/home">
          <img src="https://pccenterweb.com.ar/web/image/website/1/logo/PC%20Center%20Computers%20%7C%20Todo%20en%20Tecnolog%C3%ADa?unique=f2bc1a9" className="logo" alt="Vite logo" />
          </NavLink>
            <NavLink to="/ml-preguntas" activeClassName="active-link">
              <button>ML Preguntas</button>
            </NavLink>

            <NavLink to="/ml-mensajeria" activeClassName="active-link">
            <button>ML Mensajeria</button>
            </NavLink>

            <NavLink to="/servicio-tecnico" activeClassName="active-link">
            <button>Servicio Tecnico</button>
            </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;
