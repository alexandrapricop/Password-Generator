import React from 'react';
import './password-length.style.scss';

export const PasswordLength = ({onChange}) => (
        <div className='password-length'>   
            <input type="number" name="length" min="1" max="250" placeholder="select password length" onChange={onChange}/>
        </div>
    )
