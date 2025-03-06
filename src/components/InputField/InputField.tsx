import React, { ChangeEvent, ComponentProps } from "react";
import './InputField.css';

interface InputFieldProps extends ComponentProps<"input"> {
    name: string
    type: string
    isRequired: boolean
    isInvalid: boolean
    defaultValue?: string    
    validationsuccess?: string
    validationerror?: string
    onChangeHandler?: any
}

export const InputField = ({ name, type, isRequired, isInvalid, defaultValue, validationerror, validationsuccess, onChangeHandler, ...rest }: InputFieldProps) => {
    const togglePasswordIcon = () => {
        const passwordField: any = document.getElementById("txtInputBox");
        const togglePassword: any = document.querySelector("#passwordEyeIcon");

        if (passwordField?.type === "password") {
            passwordField.type = "text";
            togglePassword.innerText = 'visibility_on';
        } else {
            passwordField.type = "password";
            togglePassword.innerText = 'visibility_off';
        }
    }

    return (
        <div className='input'>
            <label htmlFor={name} className={`${isRequired ? 'input__label input__label--important' : 'input__label'}`}>{name}</label>
            <div className='input__group'>
                <input name={name} type={type} defaultValue={defaultValue} className={`${isInvalid ? "input__area input__area--error" : "input__area"}`}
                    required={isRequired} onChange={(e: ChangeEvent) => { onChangeHandler(e) }} {...rest} />
                {type === 'password' && <button onClick={togglePasswordIcon} className="input__password-visibility" type="button">
                    <span className="material-icons">{'visibility_on'}</span>
                </button>}
            </div>
            {isInvalid && <div className="input__error">{validationerror}</div>}
            {!isInvalid && <div className="input__success">{validationsuccess}</div>}
        </div >
    )
}
