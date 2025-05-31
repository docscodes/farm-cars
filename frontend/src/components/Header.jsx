import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/react.svg";

export const Header = ({ user, logout }) => {
  return (
    <header className="flex justify-between items-center m-4 h-16 text-blue-800 border-b-2">
      <Link to="/" className="logo flex items-center gap-2 text-2xl">
        <img src={Logo} alt="Logo" />
        <span>FARM Cars</span>
      </Link>
      
      <nav className="flex items-center gap-4 text-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        {user ? (
          <>
            <NavLink to="/new-car">New Car</NavLink>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </header>
  );
};
