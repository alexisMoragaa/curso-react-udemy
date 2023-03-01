import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Calculadora from './components/Calculadora'

const App = props => {
  return (

        <Router>

            <div> {/* Establece los links como barra de navegacion*/} 
                <Link to="/">Home</Link>
                <Link to="/calculadora">Calculadora</Link>
            </div>

            <Routes> {/* Renderiza los componentes correspondientes cuando la ruta se coincide con la indicada en el path */}
                <Route path='/' element={"Home"}/>
                <Route path='/main' element={"Main"}/>
                <Route path='/calculadora'element={<Calculadora />}/>
                <Route path='*' element={"404 Not Found"}/>
            </Routes>
        </Router>
 
  )
}



export default App