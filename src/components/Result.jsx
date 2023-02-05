import React from "react";


const Result = (props) => {
    
    return(
        <div className="result">
            <span>{props.num1 + props.num2}</span>
        </div>
    )
}

export default Result