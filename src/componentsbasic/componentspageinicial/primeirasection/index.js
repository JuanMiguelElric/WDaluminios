import React from "react";
import"../../../App.css";
import logo from "../../../images/logosemfundo.png";
import mulher from "../../../images/mulher.png"

function Primeirasecao(){
    return(
        <section>
            <div className="primeirasection">
                <h1>BEM VINDO</h1>
                <h1 className="agrupar">AO MUNDO</h1>
                
               
                <img src={logo} className="logolandin" alt="logo pageinicial" />

            </div>
            <div className="primeirasectionright">
                <img src={mulher} className="mulher removeTelpeq removeTelmed  " alt="mulher wd"/>
            </div>
        </section>
        
    )
}
export default Primeirasecao;