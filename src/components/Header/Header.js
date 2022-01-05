import React from 'react';
import {Typewriter, useTypewriter, Cursor} from 'react-simple-typewriter';
import {Button} from "./Button";
import './Header.css';

function Header() {
    return (
      <div className="Header">
        <div className="header-text">
          <h1>Hola, me<br/>llamo Nicolás</h1>
          <p>
            Soy un&nbsp;
            <span className="typewriter">
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
                words={['Ingeniero Multimedia. 👨‍🎓', 'Desarrollador Web. 💻', 'Entrenador Pokémon. 🎮']}
              />
            </span>
            <br/>
          </p>
          <Button>Sobre Mí</Button>
        </div>
      </div>
    );
  }
  
  export default Header;