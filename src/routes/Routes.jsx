import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page404 from '../components/404/Page404'
import App from '../components/App'
import Counter from '../components/Counter'
import FormPerson from '../components/FormPerson'
import Imc from '../components/Imc'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="counter" element={<Counter />} />
                    <Route path="imc" element={<Imc />} />
                </Route>

                <Route path="/register" element={<FormPerson />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router