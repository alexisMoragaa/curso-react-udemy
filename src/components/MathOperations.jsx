import React from "react";

import Button from './Button'
import PropTypes from 'prop-types'



const MathOperations = ({operations, equals}) => (

    <div className="math-operations">
        <Button text="+" handler={operations}/>
        <Button text="-" handler={operations}/>
        <Button text="*" handler={operations}/>
        <Button text="/" handler={operations}/>
        <Button text="=" handler={equals}/>

    </div>

)

//Se añaden las reglas de validacion para las funciones que recive como entrada
MathOperations.propTypes = {
    operations : PropTypes.func.isRequired,
    equals : PropTypes.func.isRequired
}

export default MathOperations