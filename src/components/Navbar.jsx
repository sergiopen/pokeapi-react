import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link className="home" to="/">Inicio</Link>
          
        <div className="principal-container">
          <ul className="ul">
            <li><Link className="list-item" to="/pokemon">POKEMONS</Link></li>
            <li><Link className="list-item" to="/item">ITEMS</Link></li>
          </ul>
        </div>
        
        
        {/*<form>
          <input className="input-search" type="text" placeholder="Busca un pokémon"/>
          <input className="input-submit" type="submit" value="Buscar"/>
  </form>*/}
    </nav>
  );
};

export default Navbar;
