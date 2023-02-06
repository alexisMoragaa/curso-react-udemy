import React from "react";
import Button from "./Button";
import PropsType from 'prop-types'


const Functions = ({onContentClear, onDelete}) => (
    <div className="functions">
        <Button text="Clear" handler={onContentClear} />
        <Button text="<-" handler={onDelete} />
    </div>
)

Functions.PropsType = {
    onContenteClear : PropsType.func.isRequired,
    onDelete : PropsType.func.isRequired
}

export default Functions