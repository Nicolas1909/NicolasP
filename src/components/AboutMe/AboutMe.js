import React from 'react';
import Images from '../Images/Images';
import './AboutMe.css';

function AboutMe() {
    return (
      <div className="AboutMe">
        <div className="aboutme-text">
          <h2>Sobre mí...</h2>
          <br/>
          <p>Mi nombre es Nicolás Palacio, soy estudiante de Ingeniería Multimedia en proceso de trabajo de grado, decidí combinar mi pasión por el desarrollo web y Pokémon en esta página.<br/><br/>Nací en Colombia y como había mencionado anteriormente, me gusta el desarrollo web, el desarrollo de juegos rpg (Al estilo de Zelda); soy seguidor de algunas franquicias de Nintendo tales como Sonic, Zelda, Mario y el mismo Pokémon.<br/><br/>De la saga de Pokémon, la región que más me gusta es Sinnoh pero mi juego favorito es Pokémon Esmeralda, mis monstruos de bolsillo favoritos son Pikachu, Leafeon, Umbreon, Lucario y Rayquaza.</p>
        </div>
        <div className="aboutme-photo">
          <figure>
            <img src={Images.nicolas} alt="FotoPerfil"/>
            <figcaption>Nicolás Palacio</figcaption>
          </figure>
        </div>
      </div>
    );
  }

export default AboutMe;