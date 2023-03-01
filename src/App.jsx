import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Calculadora from './components/Calculadora'

const App = props => {
  return (

        <Router>
            <Routes>
                <Route path='/' element={"Home"}/>
                <Route path='/main' element={"Main"}/>
                <Route path='/calculadora'element={<Calculadora />}/>
                <Route path='*' element={"404 Not Found"}/>
            </Routes>
        </Router>
 
  )
}



export default App