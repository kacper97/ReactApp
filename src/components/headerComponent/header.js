import React, { Component } from 'react';
import {
  Link
  } from 'react-router-dom';

class Header extends React.Component{
      render(){
        return(
        <header>

          <div className="poland">
            POLAND
          </div>

          <nav>
            <ul>
              <li className="first">
                <Link to="/"> Home </Link>
              </li>
              <li>
               <Link to="/Team">Team </Link>
              </li>
              <li className="last">  
                <Link to="/Sights">Sights </Link>
              </li>
            </ul>
          </nav>
         
        </header>
        );
      }
    }

 export default Header;