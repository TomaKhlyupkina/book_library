import React from 'react';
import classes from "./LoginForm.module.css"
import CustomInput from "../UI/input/CustomInput";
import CustomButton from "../UI/button/CustomButton";

const LoginForm = () => {
    return (
        <form className={classes.login_form}>
            <CustomInput
                type={"text"}
                placeholder={"Enter your name"}
            />
            <CustomInput
                type={"password"}
                placeholder={"Enter password"}
            />
            <CustomButton>Login</CustomButton>
        </form>
    );
};

export default LoginForm;