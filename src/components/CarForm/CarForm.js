import React, { useState } from "react";
import styles from "./CarForm.module.css";

const CarForm = ({ onSubmit, onCancel }) => {
  const [car, setCar] = useState({ model: "", brand: "", year: "", color: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({ ...prevCar, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      onSubmit(car);
      setCar({ model: "", brand: "", year: "", color: "" });
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!car.model) {
      errors.model = "O modelo é obrigatório";
    }
    if (!car.brand) {
      errors.brand = "A marca é obrigatória";
    }
    if (!car.year) {
      errors.year = "O ano é obrigatório";
    } else if (isNaN(car.year)) {
      errors.year = "O ano deve ser um número";
    }
    if (!car.color) {
      errors.color = "A cor é obrigatória";
    }
    return errors;
  };

  return (
    <div className={styles.container}>
      <h2>Cadastro de Carro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="model">Modelo:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={car.model}
            onChange={handleChange}
            className={errors.model ? styles.error : ""}
          />
          {errors.model && (
            <p className={styles.errorMessage}>{errors.model}</p>
          )}
        </div>
        <div>
          <label htmlFor="brand">Marca:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={car.brand}
            onChange={handleChange}
            className={errors.brand ? styles.error : ""}
          />
          {errors.brand && (
            <p className={styles.errorMessage}>{errors.brand}</p>
          )}
        </div>
        <div>
          <label htmlFor="year">Ano:</label>
          <input
            type="text"
            id="year"
            name="year"
            value={car.year}
            onChange={handleChange}
            className={errors.year ? styles.error : ""}
          />
          {errors.year && <p className={styles.errorMessage}>{errors.year}</p>}
        </div>
        <div>
          <label htmlFor="color">Cor:</label>
          <input
            type="text"
            id="color"
            name="color"
            value={car.color}
            onChange={handleChange}
            className={errors.color ? styles.error : ""}
          />
          {errors.color && (
            <p className={styles.errorMessage}>{errors.color}</p>
          )}
        </div>
        <div className={styles.buttons}>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
