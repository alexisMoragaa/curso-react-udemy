import React from "react";

import Result from './Result'//importa el componente result, el cual mostrara el resultado de las operaciones
import Button from './Button'//Importamos el componente de los botones

import '../css/calculadora.css'


const clickHandlerFucntion = (text) => {
    console.log("El valor recibido desde el componente button es : "+text)
}

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
           
        </main>
    )
}



export default Calculadora