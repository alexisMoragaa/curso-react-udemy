import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { CalculadoraPage } from './pages/CalculadoraPage'
import { NotFoundPages } from './pages/NotFoundPages'
import { WelcomePage } from './pages/WelcomePage'
const App = props => {
  return (

        <Router>

            <div> {/* Establece los links como barra de navegacion*/} 
                <Link to="/">Home</Link>
                <Link to="/calculadora">Calculadora</Link>
            </div>

            <Routes> {/* Renderiza los componentes correspondientes cuando la ruta se coincide con la indicada en el path */}
                <Route path='/' element={<WelcomePage />}/>
                <Route path='/cities' element={"Main"}/>
                <Route path='/calculadora'element={<CalculadoraPage />}/>
                <Route path='*' element={<NotFoundPages />}/>
            </Routes>
        </Router>
 
  )
}



export default App