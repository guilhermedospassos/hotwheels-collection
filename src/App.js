import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import CarForm from "./components/CarForm/CarForm";
import CarList from "./components/CarList/CarList";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [cars, setCars] = useState([
    {
      id: 1,
      model: "Camaro",
      brand: "Chevrolet",
      year: 2022,
      color: "Vermelho",
      key: "1-Camaro-Chevrolet",
    },
    {
      id: 2,
      model: "Mustang",
      brand: "Ford",
      year: 2021,
      color: "Azul",
      key: "2-Mustang-Ford",
    },
    {
      id: 3,
      model: "Corvette",
      brand: "Chevrolet",
      year: 2020,
      color: "Amarelo",
      key: "3-Corvette-Chevrolet",
    },
  ]);

  const handleSubmit = (newCar) => {
    const newCarWithKey = {
      ...newCar,
      key: `${newCar.id}-${newCar.model}-${newCar.brand}`,
    };
    setCars((prevCars) => [...prevCars, newCarWithKey]);
  };

  const handleUpdate = (updatedCar) => {
    setCars((prevCars) =>
      prevCars.map((car) => (car.key === updatedCar.key ? updatedCar : car))
    );
  };

  const handleDelete = (key) => {
    setCars((prevCars) => prevCars.filter((car) => car.key !== key));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/register"
            element={<CarForm onSubmit={handleSubmit} />}
          />
          <Route
            path="/cars"
            element={
              <CarList
                cars={cars}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
