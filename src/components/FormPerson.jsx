import React from 'react'
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';

const FormPerson = () => {

    const navigate = useNavigate();

    const [formData, handleChange] = useForm({
        name: '',
        age: 0,
        city: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('guardando', formData);
    }

    const handleHome = () => {
        navigate('/');
    }

    const inputs = [
        {
            name: 'name',
            placeholder: 'Escriba su nombre',
            type: 'text',
            label: 'Nombre'
        },
        {
            name: 'age',
            placeholder: 'Escriba su Edad',
            type: 'number',
            label: 'Edad'
        },
        {
            name: 'city',
            placeholder: 'Escriba su Ciudad',
            type: 'text',
            label: 'Ciudad'
        }
    ]

    return (
        <>
            <h2>Registro de Personas</h2>
            <form className='imc__form' onSubmit={(e) => { handleSubmit(e) }}>
                {
                    inputs.map((input, index) => (
                        <label key={index}>
                            {input.label}
                            <input type={input.type} placeholder={input.placeholder} name={input.name} onChange={(e) => { handleChange(e) }} value={formData[input.name]} />
                        </label>
                    ))
                }
                {/* <label>
                    Nombre:
                    <input type="text" placeholder='Nombre' name='name' onChange={(e) => { handleChange(e) }} value={formData.name} />
                </label>
                <label>
                    Edad:
                    <input type="number" placeholder='Edad' name='age' onChange={(e) => { handleChange(e) }} value={formData.age} />
                </label>
                <label>
                    Ciudad:
                    <input type="text" placeholder='Ciudad' name='city' onChange={(e) => { handleChange(e) }} value={formData.city} />
                </label> */}
                <button type='submit'>Guardar</button>
            </form>
            <br />
            <button onClick={handleHome}>Volver al Inicio</button>
        </>
    )
}

export default FormPerson