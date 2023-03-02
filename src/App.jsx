import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import { CalculadoraPage } from './pages/CalculadoraPage'
import { NotFoundPages } from './pages/NotFoundPages'
import { WelcomePage } from './pages/WelcomePage'
import { CityPage } from './pages/CityPage'


const App = props => {
  return (

        <Grid container justifyContent="center" direction="row">
            <Grid item sm={11}>

                <Router>

                    <div> {/* Establece los links como barra de navegacion*/} 
                        <li>
                            <Link to="/calculadora">Calculadora</Link>
                        </li>

                        <li>
                            <Link to="/">CityList</Link>
                        </li>

                        <li>
                            <Link to="/city">City</Link>
                        </li>

                    </div>

                    <Routes> {/* Renderiza los componentes correspondientes cuando la ruta se coincide con la indicada en el path */}
                        <Route path='/' element={<WelcomePage />}/>
                        <Route path='/city' element={ <CityPage />}/>
                        <Route path='/calculadora'element={<CalculadoraPage />}/>
                        <Route path='*' element={<NotFoundPages />}/>
                    </Routes>
                </Router>

            </Grid>
        </Grid>    
 
  )
}



export default App