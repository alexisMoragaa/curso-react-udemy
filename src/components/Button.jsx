import React from "react";

import PropTypes from 'prop-types'

const Button = ({text, type, handler}) => {
    return (
            <button className={type}>
                <span>{text}</span>
            </button>
    )
}


Button.propTypes = {
    text : PropTypes.string.isRequired,
}

export default Button;