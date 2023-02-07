import React from "react";
import Button from './Button'


const numbers =  [9,8,7,6,5,4,3,2,1,0]

const renderButton = clickHandlerFucntion => {
  return numbers.map( (num) =>  <Button text={num.toString()} handler={clickHandlerFucntion } key={num} /> )
    
}


const NumerosCalculadora = ({clickHandlerFucntion}) => {
    
    return(
        <div className="numbers">           
            {renderButton(clickHandlerFucntion)}
        </div>
    )
}


export default NumerosCalculadora