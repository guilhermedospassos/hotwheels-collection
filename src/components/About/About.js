import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1>Sobre a Coleção de Carros HotWheels</h1>
      <p>
        Este site foi criado para facilitar o gerenciamento de coleções de
        carrinhos HotWheels. Aqui você pode cadastrar, visualizar, editar e
        remover os carros de sua coleção.
      </p>
      <p>
        A paixão por carrinhos HotWheels é algo que une entusiastas de todas as
        idades. Esperamos que este site torne a experiência de colecionar ainda
        mais emocionante!
      </p>
    </div>
  );
};

export default About;
