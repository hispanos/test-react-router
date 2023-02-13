import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav className="menu">
        <NavLink to='/' className="menu__item">Inicio</NavLink>
        <NavLink to='imc' className="menu__item">IMC</NavLink>
        <NavLink to='counter' className="menu__item">Contador</NavLink>
        <NavLink to='/register' className="menu__item">Registro</NavLink>
      </nav>
      <main className="main">
        <h1>Bienvenido Usuario</h1>
        <Outlet />
      </main>
    </>
  );
};

export default App;
