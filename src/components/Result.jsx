import React from "react";


/** Destrucuring
 * El destructuring es una forma de descomponer un objeto y separar sus valores en variables independientes
 * Para esto  abrimos llaves, dentro de las llaves escribimos las variables que deseamos extraer del objeto
 * y finalmente igualamos esto al valor del objeto que queremos deconstuir 
 * EJ: const { valor1, valor2 } = objeto_inicial
 * Siguiendo el ejemplo anterior estamos extrayendo las variables valor1 y valor2, las cuales deben estar dentro del objeto
 * con este metodo logramos extraer el valor a variables normales las cuales podemos manipular de forma independiente
 * Otra forma de hacerlo es instanciarlo directamente en la recepcion de parametros de un componente, 
 * como se muestra en el componente Result
 */

const Result = ({num1, num2}) => {
    
    return(
        <div className="result">
            <span>{num1 + num2}</span>
        </div>
    )
}

export default Result