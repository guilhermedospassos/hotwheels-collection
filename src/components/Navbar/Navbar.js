import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Coleção de Carros</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/register">Cadastro</Link>
        </li>
        <li>
          <Link to="/cars">Lista de Carros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
