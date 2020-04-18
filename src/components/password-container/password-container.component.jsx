import React from 'react'
import "./password-container.style.scss";
import { CopyToClipboard } from '../copy-to-clipboard/copy-to-clipboard.component';

export const PasswordContainer = ({password}) => {
  
  const onClick = (e) => {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert('Password copied to clipboard!');
  }

  return(
  <div className='password-container'>
      <input id="password" value={password} spellcheck="false" className="password-container-input" type="text" />
      <CopyToClipboard onClick={onClick}/>
  </div>

  )}

