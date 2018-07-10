import React, { Component } from 'react';
import './App.css';


class Header extends Component {
   render() {
      return (
         <header>
            <h1>Follow the Yellow Brick Road</h1>
            <nav>
               <div>Cast:</div>
               <div><a href="dorthy.html">Dorothy</a></div>
               <div><a href="tinman.html">Tin Man</a></div>
               <div><a href="toto.html">Toto</a></div>
               <div><a href="scarecrow.html">Scare Crow</a></div>
               <div><a href="lion.html">Lion</a></div>
               <div><a href="witches.html">Witches</a></div>
            </nav>
         </header>
      );
   }
}

export default Header;
