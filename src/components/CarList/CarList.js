import React, { useState } from "react";
import styles from "./CarList.module.css";

const CarList = ({ cars, onUpdate, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [editingCar, setEditingCar] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleUpdate = (key, updatedCar) => {
    onUpdate(updatedCar);
    setEditingCar(null);
  };

  const handleEdit = (car) => {
    setEditingCar(car);
  };

  const filteredCars = cars.filter(
    (car) =>
      car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.year.toString().includes(searchTerm)
  );

  return (
    <div className={styles.container}>
      <h2>Lista de Carros</h2>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar por modelo ou ano"
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
      </div>
      <ul className={styles.carList}>
        {filteredCars.map((car) =>
          editingCar && editingCar.key === car.key ? (
            <li key={car.key} className={styles.carItem}>
              <div>
                <input
                  type="text"
                  value={editingCar.model}
                  onChange={(e) =>
                    setEditingCar({ ...editingCar, model: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={editingCar.brand}
                  onChange={(e) =>
                    setEditingCar({ ...editingCar, brand: e.target.value })
                  }
                />
                <input
                  type="number"
                  value={editingCar.year}
                  onChange={(e) =>
                    setEditingCar({ ...editingCar, year: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={editingCar.color}
                  onChange={(e) =>
                    setEditingCar({ ...editingCar, color: e.target.value })
                  }
                />
              </div>
              <div className={styles.actions}>
                <button onClick={() => setEditingCar(null)}>Cancelar</button>
                <button
                  onClick={() => {
                    handleUpdate(car.key, editingCar);
                  }}
                >
                  Salvar
                </button>
              </div>
            </li>
          ) : (
            <li key={car.key} className={styles.carItem}>
              <div>
                <p>Modelo: {car.model}</p>
                <p>Marca: {car.brand}</p>
                <p>Ano: {car.year}</p>
                <p>Cor: {car.color}</p>
              </div>
              <div className={styles.actions}>
                <button onClick={() => onDelete(car.key)}>Excluir</button>
                <button onClick={() => handleEdit(car)}>Atualizar</button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CarList;
