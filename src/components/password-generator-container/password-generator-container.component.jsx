import React, { useState } from 'react';

import './password-generator-container.style.scss';
import { CheckBox } from '../checkbox/checkbox.component';
import { PasswordContainer } from '../password-container/password-container.component';
import { PasswordLength } from '../password-length/password-length.component';
import { GeneratePasswordButton } from '../generate-password-button/generate-password-button.component';

export const PasswordGenerator = () => {
    const [uppercase, setUppercase] = useState(false);
    const [lowercase, setLowercase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [characters, setCharacters] = useState(false);
    const [length, setLength] = useState(9);
    const [password, setPassword] = useState('Password will appear here');
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    
    const handleChange = (e) => {
        const valueChanged = e.target.value;
        switch(valueChanged){
            case 'uppercase':
                setUppercase(!uppercase);
                break;
            case 'lowercase':
                setLowercase(!lowercase);
                break;
            case 'numbers':
                setNumbers(!numbers);
                break;
            case 'characters':
                setCharacters(!characters);
                break;
            default:
                setLength(valueChanged)
                break;
        }
    }

    const onClick = () => {
        if(length>0){
            const newPassword = generatePassword();
            setPassword(newPassword);
        }else {
            alert('Password must have at least one character')
        }
    }   

    const generateUppercaseLetter = () => {
        const numberOfLetters = letters.length;
        return letters[Math.floor(Math.random()*numberOfLetters)].toUpperCase();
    }
    const generateLowercaseLetter = () => {
        const numberOfLetters = letters.length;
        return letters[Math.floor(Math.random()*numberOfLetters)].toLowerCase();
    }
    const generateNumber = () => {
        return Math.floor(Math.random()*9);
    }
    const generateSpecialCharacter = () => {
        const numberOfCharacters = specialCharacters.length;
        return specialCharacters[Math.floor(Math.random()*numberOfCharacters)];
    }

    const generatePassword = () => {

        let newPassword = '';
        const passwordCharacters = [uppercase,lowercase,numbers,characters];
        const passwordFunctions = [generateUppercaseLetter, generateLowercaseLetter, generateNumber, generateSpecialCharacter].filter( (element, index) =>  passwordCharacters[index] === true)
        let counter = length;

        while(counter>0){
            for(let i=0; i<passwordFunctions.length && counter>0; i++){
                let character = passwordFunctions[i]();
                newPassword = newPassword + character;
                counter--;}
        }

        return newPassword;
    }



    return(
        <div className='password-generator-container'>
            <PasswordContainer password={password}/>
            <PasswordLength onChange={handleChange}/>
            <CheckBox name='uppercase' value='uppercase' text='Uppercase' onChange={handleChange}/>
            <CheckBox name='lowercase' value='lowercase' text='Lowercase' onChange={handleChange}/>
            <CheckBox name='numbers' value='numbers' text='Numbers' onChange={handleChange}/>
            <CheckBox name='characters' value='characters' text='Special Characters' onChange={handleChange}/>
            <GeneratePasswordButton onClick={onClick}/>
        </div>
)
}
