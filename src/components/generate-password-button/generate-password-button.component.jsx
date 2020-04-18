import React from 'react'
import './generate-password-button.style.scss';

export const GeneratePasswordButton = ({onClick}) => (
    <>
        <button className="generate-password-button" onClick={onClick}>
            Generate Password
        </button>
    </>
)