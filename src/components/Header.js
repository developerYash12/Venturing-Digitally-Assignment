import React from 'react';
import Form from './Form'
import {  NavLink } from "react-router-dom";
import "../components/header.css"

import AppsIcon from '@mui/icons-material/Apps';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Header() {


 


 
  return (
    <>
      <nav>
        <AppsIcon/>
        <NavLink className='getActiveStyle' to="/">
          Home
        </NavLink>

        <NavLink className='getActiveStyle' to="/">
          My Learnings
        </NavLink>
     
        <NavLink className='getActiveStyle' to="/">
          Documents actions  ▼
        </NavLink>
    
        <NavLink className='getActiveStyle' to="/">
          Quality management
        </NavLink>
  
        <NavLink className='getActiveStyle' to="/">
          Risk management  ▼
        </NavLink>
        <KeyboardDoubleArrowRightIcon  className='arrowStyle'/>
        <button className='myStyle'> + Create record <ArrowDownwardIcon style={{height: '13px' }}/></button><br/>
      </nav>
      <span className='span'>Document from Templete (Step 2)</span>
      <hr/>
      <div className='save-links'>
      <NavLink className='getActiveStyle2' to="/">
          Cancel
        </NavLink>
        <button  className="myStyle"> Save</button>
      </div>
    
    </>
  );
}