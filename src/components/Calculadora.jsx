import React from "react";

import Result from './Result'//importa el componente result, el cual mostrara el resultado de las operaciones
import Button from './Button'//Importamos el componente de los botones

import '../css/calculadora.css'
import MathOperations from "./MathOperations";


const clickHandlerFucntion = (text) => {
    console.log("El valor recibido desde el componente button es : "+text)
}


const operations = text => console.log("Presiono para ejecutar la operacion : "+text)

const equals = text => console.log("Presiono para ejecutar la operacion : "+text)



const Calculadora = () => {
    return (
        <main className="react-calculator">
           <Result value={12}/>
           <div className="numbers">
            <Button text={"9"} handler={clickHandlerFucntion}/>
            <Button text={"8"} handler={clickHandlerFucntion}/>
            <Button text={"7"} handler={clickHandlerFucntion}/>
            <Button text={"6"} handler={clickHandlerFucntion}/>
            <Button text={"5"} handler={clickHandlerFucntion}/>
            <Button text={"4"} handler={clickHandlerFucntion}/>
            <Button text={"3"} handler={clickHandlerFucntion}/>
            <Button text={"2"} handler={clickHandlerFucntion}/>
            <Button text={"1"} handler={clickHandlerFucntion}/>
            <Button text={"0"} handler={clickHandlerFucntion}/>
           </div>
           <div className="functions">
            <button>
                clear
            </button>
            <button>
                r
            </button>
        </div>
        <MathOperations operations={operations} equals={equals}/>
        </main>
    )
}



export default Calculadora