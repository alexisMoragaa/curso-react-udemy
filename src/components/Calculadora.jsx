import React from "react";
import Functions from './Functions'//Importa el componente con los botones limpiar y borrar ultimo caracter
import MathOperations from "./MathOperations";//importa el componente con los botones de operaciones matematicas
import NumerosCalculadora from './NumerosCalculadora'//Importamos el componente de los botones
import Result from './Result'//importa el componente result, el cual mostrara el resultado de las operaciones

import '../css/calculadora.css'


const clickHandlerFucntion = (text) => {
    console.log("El valor recibido desde el componente button es : "+text)
}

//Funciones para el componente MathOperations
const operations = text => console.log("Presiono para ejecutar la operacion : "+text)
const equals = text => console.log("Presiono para ejecutar la operacion : "+text)

//Funciones para el componente Functions
const onContentClear = text => console.log("Presiono para ejecutar la operacion : "+text)
const onDelete = text => console.log("Presiono para ejecutar la operacion : "+text)


const Calculadora = () => {
    return (
        <main className="react-calculator">
            <Result value={12}/>

            <NumerosCalculadora clickHandlerFucntion={clickHandlerFucntion} />

            <Functions onContentClear={onContentClear} onDelete={onDelete}/>

            <MathOperations operations={operations} equals={equals}/>
        </main>
    )
}



export default Calculadora