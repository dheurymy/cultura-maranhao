import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import style from './Navbar.module.scss'; 

import Home from '../Home';
import Festas from '../Festas';
import PontosTuristicos from '../PontosTuristicos';
import Culinaria from '../Culinaria';
import Artesanato from '../Artesanato';
import Sobre from '../Sobre';

import home from '../../assets/images/Home.svg';
import local from '../../assets/images/location.svg';
import party from '../../assets/images/party.svg';
import food from '../../assets/images/food.svg';
import art from '../../assets/images/art.svg';
import code from '../../assets/images/code.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? style.activeNavItem : '';
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
          <div className={`${style.navItem} ${getNavLinkClass('/')}`}>
            <Link to="/" onClick={toggleMenu}>
              <img src={home} alt="Home" className={style.navImage} />
              Página Inicial
            </Link>
            <div></div>
            
          </div>
          <div className={`${style.navItem} ${getNavLinkClass('/festas')}`}>
            <Link to="/festas" onClick={toggleMenu}>
              <img src={party} alt="Festas Populares" className={style.navImage} />
              Festas Populares
            </Link>
            <div></div>
          </div>
          <div className={`${style.navItem} ${getNavLinkClass('/culinaria')}`}>
            <Link to="/culinaria" onClick={toggleMenu}>
              <img src={food} alt="Culinária" className={style.navImage} />
              Culinária
            </Link>
            <div></div>
          </div>
          <div className={`${style.navItem} ${getNavLinkClass('/artesanato')}`}>
            <Link to="/artesanato" onClick={toggleMenu}>
              <img src={art} alt="Artesanato" className={style.navImage} />
              Artesanato
            </Link>
            <div></div>
          </div>
          <div className={`${style.navItem} ${getNavLinkClass('/pontos-turisticos')}`}>
            <Link to="/pontos-turisticos" onClick={toggleMenu}>
              <img src={local} alt="Pontos Turísticos" className={style.navImage} />
              Pontos Turísticos
            </Link>
            <div></div>
          </div>
          <div className={`${style.navItem} ${getNavLinkClass('/sobre')}`}>
            <Link to="/sobre" onClick={toggleMenu}>
              <img src={code} alt="Sobre Nós" className={style.navImage} />
              Sobre Nós
            </Link>
            <div></div>
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
}

