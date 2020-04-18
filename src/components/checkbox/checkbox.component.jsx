import React from 'react'
import './checkbox.style.scss';

export const CheckBox = ({ name, value, ...otherProps }) => (
    <div className='radio-button'>
        <input type='checkbox' name={name} value={value} onChange={otherProps.onChange}/>
        <label id="label">{otherProps.text}</label>
    </div>
)
