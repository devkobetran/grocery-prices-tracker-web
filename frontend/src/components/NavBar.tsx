import React from "react";
//Need this to switch pages
//React Router Dom Updates
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className="nav__link">
                            Home
                        </Link>
                        <Link to="/add-form" className="nav__link">
                            Add Item
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
  
  
export default NavBar;