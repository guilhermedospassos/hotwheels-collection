import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Bem-vindo à Coleção de Carros HotWheels</h1>
      <p>
        Neste site, você pode explorar e gerenciar sua coleção de carrinhos
        HotWheels. Cadastre seus carros, visualize a lista completa e atualize
        as informações quando necessário.
      </p>
    </div>
  );
};

export default Home;
