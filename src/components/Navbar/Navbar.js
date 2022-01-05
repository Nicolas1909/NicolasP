import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import Images from '../Images/Images';
import './Navbar.css';

class Navbar extends Component {
    //Función para cambiar fondo el Navbar si se hace scrollDown
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
        if (window.scrollY > 80) {
          document.querySelector(".Navbar").className = "Navbar active";
        } else {
          document.querySelector(".Navbar").className = "Navbar";
        }
    };
    state={clicked: false}
    // La función handleClick permite cambiar de true a false el state clicked
    handleClick = () => {
        this.setState({clicked : !this.state.clicked});
    }
    render() {
        return(
            <nav className="Navbar">
                {/* Logo (React) */}
                {/* <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1> */}
                {/* Logo (Pokémon) */}
                <img className="navbar-logo" src={Images.logo} alt="LogoPokemonNicolas"/>
                <div className="menu-icon" onClick={this.handleClick}>
                    {/* Sí el estado clicked es false, poner el logo de menú hamburguesa y si es true, poner el logo de la "x" */}
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                {/* Sí el state es false, el nav-menu será el de web, y si el state es true el nav-menu será el de mobil*/}
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {/* MenuItems se importa, item tiene la estructura (title, url, cName) y el index el número de cada una de las estructuras */}
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;