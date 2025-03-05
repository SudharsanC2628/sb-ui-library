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
    let isPassword = type === 'password';

    return (
        <div className='input'>
            <label htmlFor={name} className={`${isRequired ? 'input__label input__label--important' : 'input__label'}`}>{name}</label>
            <div className='input__group'>
                <input name={name} type={type} defaultValue={defaultValue} className={`${isInvalid ? "input__area input__area--error" : "input__area"}`}
                    required={isRequired} onChange={(e: ChangeEvent) => { onChangeHandler(e) }} {...rest} />
                {type === 'password' && <button onClick={() => { isPassword = !isPassword; }} className="input__password-visibility" type="button">
                    <span className="material-icons">{isPassword ? 'visibility_on' : 'visibility_off'}</span>
                </button>}
            </div>
            {isInvalid && <div className="input__error">{validationerror}</div>}
            {!isInvalid && <div className="input__success">{validationsuccess}</div>}
        </div >
    )
}
