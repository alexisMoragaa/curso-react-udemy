import React from "react";
import Button from './Button'//Importamos el componente de los botones
import Functions from './Functions'//Importa el componente con los botones limpiar y borrar ultimo caracter
import MathOperations from "./MathOperations";//importa el componente con los botones de operaciones matematicas
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

            <Functions onContentClear={onContentClear} onDelete={onDelete}/>

            <MathOperations operations={operations} equals={equals}/>
        </main>
    )
}



export default Calculadora