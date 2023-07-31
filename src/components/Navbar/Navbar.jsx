import { Link, NavLink} from 'react-router-dom';
// import './Navbar.css'; // Si deseas agregar estilos, crea el archivo Navbar.css

function Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Agrega aquí el logo de aproximadamente 100x400 px */}
        {/* <img src="https://pccenterweb.com.ar/web/image/website/1/logo/PC%20Center%20Computers%20%7C%20Todo%20en%20Tecnolog%C3%ADa?unique=f2bc1a9" className="" alt="Vite logo" /> */}
      </div>
      <ul className="nav-links">
      <NavLink to="/home" >
                      <div>Home</div>

      </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;