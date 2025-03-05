import React, { ComponentProps, MouseEventHandler } from "react";
import './Button.css';

interface ButtonProps extends ComponentProps<"button"> {
    buttonText: string;
    ariaLabel?: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
    const { buttonText, ariaLabel, handleClick, children, ...rest } = props;
    return <>
        <button id={props.id} name={props.name} type="button" className={'button'} aria-label={ariaLabel} onClick={handleClick} {...rest} defaultValue={buttonText}>
            {buttonText}
            {children || ''}
        </button>
    </>
}
