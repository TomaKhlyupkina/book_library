import React from 'react';
import classes from "./Input.module.css"

const CustomInput = (props) => {
    return (
        <input className={classes.custom_input} {...props}/>
    );
};

export default CustomInput;