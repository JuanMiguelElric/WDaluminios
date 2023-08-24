import React, {useEffect, useState} from "react";
import operaro from "../../../images/operario.png"
import "../../../App.css"


const Terceirasection =() =>{
    const [ativo, setAtivo] = useState(false)
    //nomeei as variaveis

    useEffect(()=>{
        const transicao = document.querySelector(".textoterceirasection");
        const MoverScroll = () =>{
            const position = transicao.getBoundingClientRect().top;
            if (position < window.innerHeight && !ativo){
                setAtivo(true);
            }
        };
        window.addEventListener("scroll",MoverScroll);
        return()=>{
            window.removeEventListener("scroll",MoverScroll);
        }
    }, [ativo]);
    return(
        <section>
            <div>
                <div className={`textoterceirasection ${ativo ? "ativarani" : ""}`}>
                    <br />
                    <br />
                    <h2 >A escolha certa</h2>
                    <br  className="remove"/>
                    <br className="remove" />
                    <p style={{color:"#ffff",marginLeft:"7%"}}> Escolha a WD Alumínios e tenha a certeza de adquirir produtos de alta qualidade e durabilidade. Nossa expertise na fabricação de Kits Box, Engenharia Retrátil e Pias é incomparável, proporcionando soluções práticas e elegantes para o seu espaço. Conte com a confiabilidade e excelência da WD Alumínios para transformar seus projetos em realidade.</p>
                    <button className="buttonnobackgroundposition">SAIBA MAIS!</button>

                </div>
                <div style={{float:"right"}}>
                    <img src={operaro} className="operario removeTelpeq" alt="operario"/>
                </div>
            </div>
        </section>
    )
}
export default Terceirasection;