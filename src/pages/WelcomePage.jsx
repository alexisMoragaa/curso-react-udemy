import React from 'react'
import { useNavigate  } from "react-router-dom";
import CityList from './../components/CityList'



const ejemplo = [

  {city: "Santiago", country: "Chile", temperature: 33, state:"sunny" },
  {city: "New York", country: "Usa", temperature: 6, state:"fog" },
  {city: "Buenos Aires", country: "Argentina", temperature: 31, state:"cloud"},
  {city: "Ciudad de Mexico", country: "México", temperature: 36, state:"rain" },
]


export const WelcomePage = () => {


  const history = useNavigate ()

  const onclickHandler = () => {
    history('/cities')
  }
  




  return (
    <div>
       <h2>Lista de ciudades</h2>
        <CityList cities={ejemplo} onClickCity={onclickHandler} />
    </div>
  )
}
