import React from "react";

import Result from './Result'//importa el componente result, el cual mostrara el resultado de las operaciones
import Button from './Button'//Importamos el componente de los botones

import '../css/calculadora.css'


const Calculadora = () => {
    return (
        <main className="react-calculator">
           <Result vaue={12}/>
           <div className="numbers">
            <Button text={"9"}/>
            <Button text={"8"}/>
            <Button text={"7"}/>
            <Button text={"6"}/>
            <Button text={"5"}/>
            <Button text={"4"}/>
            <Button text={"3"}/>
            <Button text={"2"}/>
            <Button text={"1"}/>
            <Button text={"0"}/>
           </div>
           {/* <NumerosCalculadora /> */}
        </main>
    )
}



export default Calculadora