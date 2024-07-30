import React from 'react';
import Header from '../../components/Header'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Home from '../../components/Home';
import Festas from '../../components/Festas';
import PontosTuristicos from '../../components/PontosTuristicos';
import Culinaria from '../../components/Culinaria';
import Artesanato from '../../components/Artesanato';
import Sobre from '../../components/Sobre';

import style from './App.module.scss';
function PageSobre() {
   return (
      <div className={style.AppStyle}>
         <Header />
         <Navbar />
         <Sobre />
         <Footer />
      </div>
   )
}

export default PageSobre;