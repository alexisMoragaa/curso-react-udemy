import React from "react";

import '../css/calculadora.css'
import NumerosCalculadora from "./NumerosCalculadora";

import Result from './Result'//importa el componente result, el cual mostrara el resultado de las operaciones

const Calculadora = () => {
    return (
        <main className="react-calculator">
           <Result num1={12} num2={14}/>
           <NumerosCalculadora />
        </main>
    )
}



export default Calculadora