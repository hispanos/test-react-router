import React, { useEffect, useState } from "react";
import useForm from "../hooks/useForm";
import { getData, saveData } from "../services/localStorage";

const Imc = () => {

  const [form, handleChange, setForm] = useForm({
    height: 0,
    weight: 0,
    name: "",
    imc: 0,
  });

  const [update, setUpdate] = useState(false);

  const [listImc, setListImc] = useState([]);

  useEffect(() => {
    console.log('Me estoy ejecutando')
    const data = getData();
    setListImc(data);
  }, [update])

  useEffect(() => {
    console.log('Hey la vida es bella')
  }, [])

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

    setUpdate(!update)

    // setListImc([...listImc, data]);

    setForm(data);
    saveData(data)
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
