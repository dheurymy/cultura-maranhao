import React, { useState } from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import style from './Navbar.module.scss'; 

import Home from '../Home';
import Festas from '../Festas';
import PontosTuristicos from '../PontosTuristicos';
import Culinaria from '../Culinaria';
import Artesanato from '../Artesanato';
import Sobre from '../Sobre';


import home from '../../assets/images/Home.svg';
import location from '../../assets/images/location.svg';
import party from '../../assets/images/party.svg';
import food from '../../assets/images/food.svg';
import art from '../../assets/images/art.svg';
import code from '../../assets/images/code.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.bar}>
      <nav className={style.navBar}>
      <div className={`${style.burger} ${isOpen ? style.burgerOpen : ''}`} onClick={toggleMenu}>
        <div className={style.burgerLine}></div>
        <div className={style.burgerLine}></div>
        <div className={style.burgerLine}></div>
      </div>
      {isOpen && <button className={style.closeButton} onClick={toggleMenu}>x</button>}
      <div className={`${style.navMenu} ${isOpen ? style.navMenuOpen : ''}`}>
        <div className={style.navItem}>
          <Link to="/">
            <img src={home} alt="" className={style.navImage} />
            Página Inicial
          </Link>
        </div>
        <div className={style.navItem}>
          <Link to="/festas">
            <img src={party} alt="" className={style.navImage} />
            Festas Populares
          </Link>
        </div>
        <div className={style.navItem}>
          <Link to="/culinaria">
            <img src={food} alt="" className={style.navImage} />
            Culinária
          </Link>
        </div>
        <div className={style.navItem}>
          <Link to="/artesanato">
            <img src={art} alt="" className={style.navImage} />
            Artesanato
          </Link>
        </div>
        <div className={style.navItem}>
          <Link to="/pontos-turisticos">
            <img src={location} alt="" className={style.navImage} />
            Pontos Turísticos
          </Link>
        </div>
        <div className={style.navItem}>
          <Link to="/sobre">
            <img src={code} alt="" className={style.navImage} />
            Sobre Nós
          </Link>
        </div>
      </div>


           
    </nav>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/festas" element={<Festas />} />
        <Route path="/culinaria" element={<Culinaria />} />
        <Route path="/artesanato" element={<Artesanato />} />
        <Route path="/pontos-turisticos" element={<PontosTuristicos />} />
        <Route path="/sobre" element={<Sobre />} />
        
      </Routes>


    </div>

    
  );
};
