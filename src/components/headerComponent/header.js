import React, { Component } from 'react';

class Header extends React.Component{
      render(){
        return(
        <header>

          <div className="poland">
            POLAND
          </div>

          <nav>
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">TEAM</a>
              </li>
              <li>  
                <a href="#">SIGHTS</a>
              </li>
            </ul>
          </nav>
         
        </header>
        );
      }
    }

 export default Header;