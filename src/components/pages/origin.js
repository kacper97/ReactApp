import React, { Component } from 'react';
import stalowa from './img/stalowa.jpg';
//bootstrap css container = container fluid
class Origin extends Component {
  render() {
    return (
      <div className="container-fluid"> 
      	
      	<h1>
      	My History
      	</h1>
		<p>
         I was born in Stalowa Wola and lived 8 years in a small village called "Kłyżów" which is around 15 km from Stalowa Wola for the first 8 years of my life before moving here. I have made many good friends and most of my family live there till today. I go to Poland to visit them each year during the summer holidays. Its very warm in the summer and cold in the winter. The highest temperature I can remember was 38 degrees Celcius and the lovest was -27 degrees Celcius.
       </p>    
       <p>
         Stalowa Wola is the largest city and capital of Stalowa Wola County with a population of 64,353 inhabitants, as of June 2008. It is located in southeastern Poland in the Subcarpathian Voivodeship. The city lies in historic Lesser Poland, near the confluence of the Vistula and San rivers and covers an area of 82.5 km2. Stalowa Wola is one of the youngest cities of Poland. It was built from scratch in the late 1930s, in the forests surrounding the village of Pławo. The city was designed to be a settlement for workers of Huta Stalowa Wola (known in 1938-39 as Zakłady Poludniowe or Southern Works), a plant built as part of the Central Industrial Region. Stalowa Wola is home to the sports club Stal Stalowa Wola.
        </p>
        <p>
         The city is dynamic but its greatest assets are the citizens. Young and well educated, they make up a priceless potential with great intellectual and manual capabilities, which can mange any kind of business activity.Other special values of the city and almost industrial field are its modern urban planning, its space and natural environment. Big woods on the banks of the River San, allowing vast space for active rest and good communication routes make up the rest. Stalowa Wola is the dynamic administration, cultural, educational and sport center.
         In the area of education the first violin plays the branch of Katolicki Universytet Lubelski, where currently study over 3 thousand students. In 1998 the new branch of the Polytechnic of Rzeszów was established, educating graduates finding employment in the local companies. In the academic year 2001/2002 its activity began the College of Economics. The preference in the education program has been given to the economics, law, computer science and foreign languages. The oldest educational institution is the Public Library, established in 1938 and operating since then without interruption. There are also two culture houses and music school operating in the city. There is a lot of facilities for young people in this new city.
         </p>
    <div className ="image">
    <img src={stalowa} alt="stw pic"/> </div>
	  </div>
    );
  }
}

export default Origin;

