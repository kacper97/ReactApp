import React, { Component } from 'react';
import team from './img/team.jpg';
//bootstrap css container = container fluid
class Team extends Component {
  render() {
    return (
      <div className="container-fluid"> 
      	
      	<h1>
      	Team
      	</h1>
      	<p>
      	The Poland national football team (Polish: Reprezentacja Polski w piłce nożnej) represents Poland in association football and is controlled by the Polish Football Association, the governing body for football in Poland. 
        Poland's home ground is the National Stadium in Warsaw and their current head coach is Adam Nawałka.
        </p>
        <p>
        One of the most renowned Polish teams was the one of the mid-1970s.
        Poland held England to a draw in a dramatic match at Wembley Stadium to qualify for the 1974 FIFA World Cup. Poland reached the semi-finals, where the deciding game against the eventual champions Germany resulted in a narrow 0-1 defeat. 
        Just missing out on the final, Poland ended the tournament by defeating Brazil 1–0 to claim third place in the tournament. Striker Grzegorz Lato won the Golden Boot for his seven goals.
       Poland also finished third in the 1982 tournament, beating France 3–2 in the third-place play-off.
       </p>
       <p>
       Poland also won the gold medal in the 1972 Summer Olympics in Munich; the silver medal in 1976 in Montreal; and a silver medal in 1992 in Barcelona.
       Poland first qualified for the UEFA European Championship in 2008. They also qualified automatically for Euro 2012 by virtue of being joint hosts alongside Ukraine. 
       They finished bottom of their group on both occasions. Their first win in the Euros was on 12 June 2016 in a group stage match of Euro 2016 against Northern Ireland.
        Poland reached the quarterfinals, the team's best result. Poland is currently ranked at 6th in the world, one position below their all-time high from August 2017.
	     </p>
        <div className= "image">
    
     <img src={team} alt="team pic"/>  </div>
    
     </div>
    );
  }
}

export default Team;
