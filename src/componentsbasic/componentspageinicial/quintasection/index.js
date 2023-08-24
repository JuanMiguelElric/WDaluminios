import React from "react";
import janela from "../../../images/j2.png"
import box from "../../../images/f1.png";
import Retratil from "../../../images/kr2-1.png";
import pia from "../../../images/kpa.png";
const QuintaSection = () =>{
    return(
        <div>
                <h3>Outros kits</h3>
            <div className="Quintasection backgroundwindowsmall backgroundwindowmind">
                <br/>
                <div className="card1 ">
                    <img src={janela} className="imgcard1" alt="kitJanelas" />

                    <h4>Kit Janelas</h4>
                    <br />
                    <p className="textocar">Projetadas para alta durabilidade, as janelas fabricadas pela WD Alumínios utilizam materiais nobres e a mais moderna tecnologia disponível no mercado nacional</p>
                    <button className="buttonquintasection" >Saiba Mais!</button>
    
                </div>
                <div className="card2 ">
                    <img src={box} className="imgcard1" alt="Kit box"/>
                    <h4>Kit box</h4>
                    <p className="textocar"> Modernos, práticos, seguros e com um sistema de movimentação ultra simples, os Kits Box produzidos pela WD Alumínios são fabricados com os melhores materiais e incorporam alta tecnologia</p>
                    <button className="buttonquintasection" >Saiba Mais!</button>
                    
    
                </div>
                <div className="card3">
                    <img src={Retratil} className="imgcard1" alt="kit Retrátil" />
                    <h4>Kit Retratil</h4>
                    <br/>
                    <p className="textocar">Considerado como o mais moderno produto disponível no mercado, o Kit Retrátil® WD foi projetado para oferecer máxima abertura de espaços e ambientes.</p>
                    <button className="buttonquintasection" >Saiba Mais!</button>
                </div>
                <div className="card4">
                    <img src={pia} className="imgcard1" alt="Kit Pia"/>
                    <h4>Kit Pia</h4>
                    <br />
                    <p className="textocar">Priorizando a segurança e a facilidade de uso como elementos fundamentais, as portas da marca WD Alumínios são fabricadas com matérias-primas nobres e empregam tecnologia de ponta</p>
                    <button className="buttonquintasection" >Saiba Mais!</button>
                </div>
    
            </div>

        </div>
        )
}
export default QuintaSection;