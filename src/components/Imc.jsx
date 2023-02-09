import React, { useState } from "react";

const Imc = () => {
  const [form, setForm] = useState({
    height: 0,
    weight: 0,
    name: "",
  });

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h2>Calculadora IMC</h2>
      <form className="imc__form">
        <label>
          Estatura:
          <input
            type="number"
            placeholder="Ingresa tu estatura"
            value={form.height}
            onChange={(e) => {
              handleChange(e);
            }}
            name="height"
          />
        </label>
        <label>
          Peso:
          <input
            type="number"
            placeholder="Ingresa tu peso"
            value={form.weight}
            onChange={(e) => {
              handleChange(e);
            }}
            name="weight"
          />
        </label>
        <label>
          Nombre:
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={form.name}
            onChange={(e) => {
              handleChange(e);
            }}
            name="name"
          />
        </label>
        <button className="btn__submit" type="submit">
          Calcular
        </button>
      </form>
    </>
  );
};

export default Imc;
