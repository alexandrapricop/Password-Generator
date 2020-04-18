import React from 'react'
import "./copy-to-clipboard.style.scss";
import copyIcon from './copy.svg';

export const CopyToClipboard = ({onClick}) => {
    return (
        <div className="copy-to-clipboard"
        onClick={onClick}>
             <img src={copyIcon}/>
             <span>
                Copy to Clipboard
            </span> 
        </div>
    )
}
