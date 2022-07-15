import React from 'react';
import classes from "./Input.module.css"

const CustomInput = (props) => {
    return (
        <input className={classes.customInput} {...props}/>
    );
};

export default CustomInput;