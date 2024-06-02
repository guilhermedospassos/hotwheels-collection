import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>Oops! Página não encontrada</h1>
      <p>A página que você está tentando acessar não existe.</p>
    </div>
  );
};

export default NotFound;
