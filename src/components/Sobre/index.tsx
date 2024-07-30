

import styleSobre from './Sobre.module.scss';
import fotoRycherd from '../../assets/images/perfilDheurymy.png';
import fotoAntonio from '../../assets/images/perfilAntonio.jpg';
import fotoNayara from '../../assets/images/perfilNayara.jpg';


import badgeHTML from '../../assets/images/icons/iconeHTML5.png';
import badgeCSS from '../../assets/images/icons/iconeCSS.png';
import badgeJS from '../../assets/images/icons/iconeJavaScript.png';
import badgeCPP from '../../assets/images/icons/iconeCPP.png';
import badgeNode from '../../assets/images/icons/iconeNode.png';
import badgePython from '../../assets/images/icons/iconePython.png';
import badgeReact from '../../assets/images/icons/iconeReact.png';
import badgeTypescript from '../../assets/images/icons/iconeTypescript.png';
import badgeFigma from '../../assets/images/icons/iconeFigma.png';

import insta from '../../assets/images/icons/iconeInstagram.svg';
import git from '../../assets/images/icons/iconeGithub.svg';
import linkedin from '../../assets/images/icons/iconeLinkedin.svg';





export default function Sobre() {

   return (

      <div className={styleSobre.page}>
         <h1 className={styleSobre.pageTitle}> Conheça os desenvolvedores do <strong>Explore o Maranhão</strong>: </h1>
         <div className={styleSobre.about}>

            <div className={styleSobre.card}>
               <div className={styleSobre.painel}>
                  <img src={fotoAntonio} alt="" className={styleSobre.image} />
                  <div className={styleSobre.links}>
                     <a target='blank' href="https://www.instagram.com/antonio.oliveira.a/" >
                        <img src={insta} alt="" title="Instagram do Antônio" />
                     </a>
                     <a target='blank' href="https://github.com/AntonioOliveiraa/">
                        <img src={git} alt="" title="Github do Antônio" />
                     </a>
                     <a target='blank' href="https://www.linkedin.com/in/ant%C3%B4nio-oliveiraa//">
                        <img src={linkedin} alt="" title="Linkedin do Antônio" />
                     </a>
                  </div>
               </div>
               <h1 className={styleSobre.title}>
                  Antônio Oliveira
               </h1>
               <p className={styleSobre.legend}>
                  Olá, pessoal, sou o  Antônio! Atualmente, sou estudande de Engenharia da Computação na Universidade Estadual do Maranhão. Tenho foco nas áreas de Desenvolvimento Web, Desenvolvimento de Software, Sistemas Embarcados e Automação. <br /><br />
                  Tenho conhecimentos também em C e C++, Javascript, React JS e Typescript. Além disso, sou
                  participante, na trilha de Programação Front-End, do programa Trilhas Inova do Governo do Maranhão com a Secretaria de Ciência, Tecnologia e Inovação, FAPEMA e Alura.
               </p>
               <div className={styleSobre.badges}>
                  <img src={badgeHTML} alt="" />
                  <img src={badgeCSS} alt="" />
                  <img src={badgeJS} alt="" />
                  <img src={badgeCPP} alt="" />
                  <img src={badgeReact} alt="" />
                  <img src={badgeTypescript} alt="" />

               </div>
            </div>
            <div className={styleSobre.card} id={styleSobre.cardDheurymy} >
               <div className={styleSobre.painel}>
                  <img src={fotoRycherd} alt="" className={styleSobre.image} />
                  <div className={styleSobre.links}>
                     <a target='blank' href="https://www.instagram.com/dheurymy" >
                        <img src={insta} alt="" title="Instagram do Dheurymy" />
                     </a>
                     <a target='blank' href="https://github.com/dheurymy">
                        <img src={git} alt="" title="Github do Dheurymy" />
                     </a>
                     <a target='blank' href="https://www.linkedin.com/in/dheurymy/">
                        <img src={linkedin} alt="" title="Linkedin do Dheurymy" />
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
                  <img src={fotoNayara} alt="" className={styleSobre.image} />
                  <div className={styleSobre.links}>
                     <a target='blank' href="https://www.instagram.com/santos._.nay" >
                        <img src={insta} alt="" title="Instagram da Nayara" />
                     </a>
                     <a target='blank' href="https://github.com/naysantss">
                        <img src={git} alt="" title="Github da Nayara" />
                     </a>
                     <a target='blank' href="https://br.linkedin.com/in/nayara-cristina-silva-santos-38b709234">
                        <img src={linkedin} alt="" title="Linkedin da Nayara" />
                     </a>
                  </div>
               </div>
               <h1 className={styleSobre.title}>
                  Nayara Cristina
               </h1>
               <p className={styleSobre.legend}>
               Olá, pessoal, sou a Nayara Cristina! Estudante de psicologia na Universidade Federal do Maranhão e  etudante de programação como complemento para o desenvolvimento de estratégias que poderão ser usadas em intervenções de casos clínicos. Sou mãe de gatos, amante do voleibol e da culinária. 
               <br /><br />
               Sou desenvolvedora Front-end com especialidade em React, HTML e CSS. . Participante, na trilha de Programação Front-End, do programa Trilhas Inova do Governo do Maranhão com SECTI, FAPEMA e Alura.
               </p>
               <div className={styleSobre.badges}>
               <img src={badgeHTML} alt="" />
                  <img src={badgeCSS} alt="" />
                  <img src={badgeJS} alt="" />
                  <img src={badgeFigma} alt="" />
                  <img src={badgeReact} alt="" />
                  <img src={badgeTypescript} alt="" />

               </div>
            </div>
         </div>

      </div>
   )
}