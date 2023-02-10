/* eslint no-eval: 0 */
import React, { useState }from "react";
import Functions from './Functions'//Importa el componente con los botones limpiar y borrar ultimo caracter
import MathOperations from "./MathOperations";//importa el componente con los botones de operaciones matematicas
import NumerosCalculadora from './NumerosCalculadora'//Importamos el componente de los botones
import Result from './Result'//importa el componente result, el cual mostrara el resultado de las operaciones
import words from 'lodash.words'
import '../css/calculadora.css'




const Calculadora = () => {

    //Deconstruimos el hoock para obtener la variable de estado y la funcion que nos permite modificar el mismo
    const [state, setState] =  useState("")

    const items = words(state, /[^-^+^*^/]+/g)//Crea un arreglo a partir del estado separandolo por las operaciones basicas + - * /

    const value = items.length > 0 ? items[items.length -1] : "0"

    //Funcion para manejar los eventos click de los botones del 0 al 9
    const clickHandlerFucntion = (num) => {
        setState(`${state}${num}`)
        console.log(`El valor recibido desde el componente button es : ${num}`)
  
    }

    //Funciones para el componente Functions
    const onContentClear = text => {
        setState('')
        console.log(`Presiono el boton : ${text}`)
    }

    const onDelete = text => {
        if(state.length >  0){
            setState(state.slice(0,-1))
            console.log(`Presiono para ejecutar la operacion : ${text}`)
        }
    }

    //Funciones para el componente MathOperations
    const operations = ope => {
        setState(`${state}${ope}`)
        console.log(`Presiono para ejecutar la operacion : ${ope}`)
    }
    
    const equals = ope => {
        if(state.length > 0){
            setState(eval(state).toString())
        }
        console.log(`Presiono para ejecutar la operacion : ${ope}`)
    }




    return (
        <main className="react-calculator">
            <Result value={value}/>

            <NumerosCalculadora clickHandlerFucntion={ clickHandlerFucntion} />

            <Functions onContentClear={ onContentClear } onDelete={ onDelete }/>

            <MathOperations operations={operations} equals={equals}/>
        </main>
    )
}



export default Calculadora