import { useState, useEffect, useRef } from "react";

import styleSobre from './Sobre.module.scss';
import foto from '../../assets/images/perfilDheurymy.png';
import badgeHTML from '../../assets/images/icons/iconeHTML5.png';
import badgeCSS from '../../assets/images/icons/iconeCSS.png';
import badgeJS from '../../assets/images/icons/iconeJavaScript.png';
import badgeCPP from '../../assets/images/icons/iconeCPP.png';
import badgeNode from '../../assets/images/icons/iconeNode.png';
import badgePython from '../../assets/images/icons/iconePython.png';

import insta from '../../assets/images/icons/iconeInstagram.svg';
import git from '../../assets/images/icons/iconeGithub.svg';
import linkedin from '../../assets/images/icons/iconeLinkedin.svg'




export default function Sobre() {

   return (
      <div className={styleSobre.about}>
         <div className={styleSobre.card}>
            <div className={styleSobre.painel}>
            <img src={foto} alt="" className={styleSobre.image} />

            <div className={styleSobre.links}>
               <a href="https://www.instagram.com/dheurymy" >
                  <img src={insta} alt="" title="Instagram do Dheurymy"/>
               </a>

               <a href="https://github.com/dheurymy">
                  <img src={git} alt="" title="Github do Dheurymy"/>
               </a>

               <a href="https://www.linkedin.com/in/dheurymy/">
                  <img src={linkedin} alt=""  title="Linkedin do Dheurymy" />
               </a>
            </div>
            </div>
            <h1 className={styleSobre.title}>
               Rycherd Dheurymy
            </h1>
            <p className={styleSobre.legend}>
               Olá, pessoal, sou o Dheurymy! Um engenheiro mecânico que se descobriu no mundo da programação, pai de gatos, fã de Drag Race, Naruto e One Piece, membro orgulhoso da comunidade LGBT+ e amante de viagens e domingos de sol. <br /><br />
               Aluno de Análise e Desenvolvimento de Sistemas pela Faculdade Laboro e Engenheiro Mecânico formado pelo Instituto Federal do Maranhão. Participante, na trilha de Programação Front-End, do programa Trilhas Inova do Governo do Maranhão com SECTI, FAPEMA e Alura.
            </p>
            <div className={styleSobre.badges}>
               <img src={badgeHTML} alt="" />
               <img src={badgeCSS} alt="" />
               <img src={badgeJS} alt="" />
               <img src={badgeCPP} alt="" />
               <img src={badgeNode} alt="" />
               <img src={badgePython} alt="" />
               

            </div>

         </div>

         <div className={styleSobre.card}>
            <div className={styleSobre.painel}>
            <img src={foto} alt="" className={styleSobre.image} />

            <div className={styleSobre.links}>
               <a href="https://www.instagram.com/dheurymy" >
                  <img src={insta} alt="" title="Instagram do Dheurymy"/>
               </a>

               <a href="https://github.com/dheurymy">
                  <img src={git} alt="" title="Github do Dheurymy"/>
               </a>

               <a href="https://www.linkedin.com/in/dheurymy/">
                  <img src={linkedin} alt=""  title="Linkedin do Dheurymy" />
               </a>
            </div>
            </div>
            <h1 className={styleSobre.title}>
               Rycherd Dheurymy
            </h1>
            <p className={styleSobre.legend}>
               Olá, pessoal, sou o Dheurymy! Um engenheiro mecânico que se descobriu no mundo da programação, pai de gatos, fã de Drag Race, Naruto e One Piece, membro orgulhoso da comunidade LGBT+ e amante de viagens e domingos de sol. <br /><br />
               Aluno de Análise e Desenvolvimento de Sistemas pela Faculdade Laboro e Engenheiro Mecânico formado pelo Instituto Federal do Maranhão. Participante, na trilha de Programação Front-End, do programa Trilhas Inova do Governo do Maranhão com SECTI, FAPEMA e Alura.
            </p>
            <div className={styleSobre.badges}>
               <img src={badgeHTML} alt="" />
               <img src={badgeCSS} alt="" />
               <img src={badgeJS} alt="" />
               <img src={badgeCPP} alt="" />
               <img src={badgeNode} alt="" />
               <img src={badgePython} alt="" />
               

            </div>

         </div>

         <div className={styleSobre.card}>
            <div className={styleSobre.painel}>
            <img src={foto} alt="" className={styleSobre.image} />

            <div className={styleSobre.links}>
               <a href="https://www.instagram.com/dheurymy" >
                  <img src={insta} alt="" title="Instagram do Dheurymy"/>
               </a>

               <a href="https://github.com/dheurymy">
                  <img src={git} alt="" title="Github do Dheurymy"/>
               </a>

               <a href="https://www.linkedin.com/in/dheurymy/">
                  <img src={linkedin} alt=""  title="Linkedin do Dheurymy" />
               </a>
            </div>
            </div>
            <h1 className={styleSobre.title}>
               Rycherd Dheurymy
            </h1>
            <p className={styleSobre.legend}>
               Olá, pessoal, sou o Dheurymy! Um engenheiro mecânico que se descobriu no mundo da programação, pai de gatos, fã de Drag Race, Naruto e One Piece, membro orgulhoso da comunidade LGBT+ e amante de viagens e domingos de sol. <br /><br />
               Aluno de Análise e Desenvolvimento de Sistemas pela Faculdade Laboro e Engenheiro Mecânico formado pelo Instituto Federal do Maranhão. Participante, na trilha de Programação Front-End, do programa Trilhas Inova do Governo do Maranhão com SECTI, FAPEMA e Alura.
            </p>
            <div className={styleSobre.badges}>
               <img src={badgeHTML} alt="" />
               <img src={badgeCSS} alt="" />
               <img src={badgeJS} alt="" />
               <img src={badgeCPP} alt="" />
               <img src={badgeNode} alt="" />
               <img src={badgePython} alt="" />
               

            </div>

         </div>

         </div>
      
   )
}