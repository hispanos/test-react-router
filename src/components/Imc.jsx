import React, { useState } from "react";

const Imc = () => {
  const [form, setForm] = useState({
    height: 0,
    weight: 0,
    name: "",
    imc: 0,
  });

  const [listImc, setListImc] = useState([]);

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const calculateImc = (
      parseFloat(form.weight) /
      (parseFloat(form.height) * parseFloat(form.height))
    ).toFixed(2);

    const data = {
      ...form,
      imc: calculateImc,
    };

    setListImc([...listImc, data]);

    setForm(data);
    console.log(form);
    console.log(listImc);
  };

  return (
    <>
      <h2>Calculadora IMC</h2>
      <form className="imc__form" onSubmit={handleSubmit}>
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

      <table>
        <thead>
          <tr>
            <th>Peso</th>
            <th>Altura</th>
            <th>Nombre</th>
            <th>Imc</th>
          </tr>
        </thead>
        <tbody>
          {listImc.map((item, index) => (
            <tr key={index}>
              <td>{item.weight}</td>
              <td>{item.height}</td>
              <td>{item.name}</td>
              <td>{item.imc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Imc;
