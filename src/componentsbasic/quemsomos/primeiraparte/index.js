import React, { useState, useEffect } from "react";
import Menu from "../../menus";
import QuemSomosSegundap from "./segundaparte";

const QuemSomos = () => {
  const [texto, setTexto] = useState(''); // Inicialmente, o texto estará vazio

  useEffect(() => {
    // Simular o efeito de digitação após o componente ser montado
    const textoCompleto = 'A WD Alumínios é uma empresa de personalidade forte e identidade única, refletida em todos os indivíduos que fazem parte dessa grande família. Com uma história de 13 anos, a WD Alumínios se destacou como uma das principais referências em seu segmento, sendo reconhecida por sua ousadia, uma característica que a define.Nossa força central provém de um profundo conhecimento de mercado, com mais de 30 anos de expertise e experiência setorial do nosso Diretor Geral, o Sr. Wanderley Marques. Sua visão é o alicerce do nosso crescimento, fortalecimento e reconhecimento nacional como uma instituição líder.';
    let i = 0;

    const interval = setInterval(() => {
      if (i <= textoCompleto.length) {
        setTexto(textoCompleto.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }, []); // O segundo argumento vazio faz com que este efeito seja executado apenas uma vez, após a montagem do componente

  return (
    <div>
      <Menu />
      <br />
      <br />
      <div className="container">
        <div className="griditem">
          <h3> Olá somos a <br /> WD Alumínios</h3>
          <button className="buttonnobackground" style={{marginLeft:'20%'}}>Traballhe conosco</button>

        </div>

        <div className="griditem">
          <p>{texto}</p>
         
        </div>
      </div>
      <br />
      <QuemSomosSegundap />
    </div>
  )
}

export default QuemSomos;
