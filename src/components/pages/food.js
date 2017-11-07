import React, { Component } from 'react';
import pierogi from './img/pierogi.jpg';
//bootstrap css container = container fluid
class Food extends Component {
  render() {
    return (
      <div className="container-fluid"> 
      	<h1>
      	Favourite topic- Food
      	</h1>

      	<p>
        Polish cuisine is a style of cooking and food preparation originating in or widely popular in Poland. 
        Polish cuisine has evolved over the centuries to become very eclectic due to Poland's history. 
        Polish cuisine shares many similarities with other Slavic countries, especially neighboring Czech and Slovak. 
        </p>
        <p>
        It has also been widely influenced by other Central European cuisines, namely German, Austrian and Hungarian cuisines  as well as Jewish,
        French, Turkish and Italian culinary traditions. It is rich in meat, especially pork, chicken and beef (depending on the region), 
        winter vegetables (cabbage in the dish bigos), spices, and herbs. It is also characteristic in its use of various kinds of
         noodles the most notable of which are kluski as well as cereals (grains) such as kasha (from the Polish word kasza).
        </p>
        <p>
         Generally speaking, Polish cuisine is hearty and uses a lot of cream and eggs. The traditional dishes are often demanding in 
         preparation. Many Poles allow themselves a generous amount of time to serve and enjoy their festive meals, 
         especially Christmas eve dinner (Wigilia) or Easter breakfast which could take a number of days to prepare in their entirety.
        </p>
     <div className ="image">
    <img src={pierogi} alt="food pic"/> </div>
    </div>
    );
  }
}

export default Food;
