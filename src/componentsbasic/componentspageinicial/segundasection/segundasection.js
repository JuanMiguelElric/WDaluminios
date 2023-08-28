import React, {useEffect, useState} from "react";
import i2 from "../../../images/i2.png"

const Segundasection=()=>{
    const [ativo, setAtivo] =  useState(false);
    useEffect(()=>{
        const elemento = document.querySelector(".retangulo");
        const handleSroll = () =>{
            const posicao = elemento.getBoundingClientRect().top;
            //se a posição do em altura for menor artivação da altura
            if(posicao < window.innerHeight && !ativo){
                setAtivo(true);
            }
        }
        window.addEventListener("scroll",handleSroll);
        return ()=>{
            window.removeEventListener("scroll",handleSroll)
        }
    }, [ativo])
    return(
        <section className="segundasection ">
            <div>
                
                <img src={i2} style={{width:"30%  "}} className="position removeTelpeq removeTelmed" alt="sede"/>
              
                <div className={`retangulo ${ativo ? "ativada" : ""}`}>
                   <p>  Fundada em 2007 a WD Alumínios tornou-se a maior e mais completa distribuidora de alumínios, ferragens e acessórios para vidraçarias de Minas Gerais, figurando entre as 5 maiores do Brasil.</p>
                   <p>Com sua linha completa de produtos, a WD está inovando e revolucionando o mercado de Kits ao estabelecer uma nova planta fabril dedicada à pintura de alumínio. Essa iniciativa visa proporcionar independência total e assegurar um padrão de qualidade excepcional para seus produtos. Especialmente direcionada para o comércio de alumínio em barras, Kits Box, Engenharia, Retrátil e Pia.</p> 
                    
                </div>

            </div>
        </section>
    )
}
export default Segundasection