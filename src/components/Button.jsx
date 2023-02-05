import React from "react";

import PropTypes from 'prop-types'



/**
 * Se añade la funcion onclick y esta a su ves ejecuta la funcion handler, usando el valor text del boton como parametro
 * la funcion handler es recibida desde el componente padre y envia de regreso el valor obtenido del boton presionado
 */
const Button = ({text, type, handler}) => {
    return (
            <button className={type} onClick={() => {handler(text)}}>
                <span>{text}</span>
            </button>
    )
}


Button.propTypes = {
    text : PropTypes.string.isRequired,
}

export default Button;