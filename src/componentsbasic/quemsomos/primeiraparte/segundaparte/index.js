import React from "react";
import figure from "../../../../images/loja-01.png";
import loja02 from "../../../../images/loja-02.png"
const QuemSomosSegundap = () =>{
    return(
        <div className="container2"style={{marginTop:"12%"}}>
            <div className="colunasegundaparte" >
                <h5>Conheça a nossa essencia</h5>
                <p> E entenda por qual motivo nos empenhamos para  estar cada dia executando melhores trabalhos.</p>
            </div>
            <div>
                <img src={figure} className="loja02" alt="figure" />
                <img src={loja02} className="loja01" alt="loja02" />
            </div>
            <br />
          
            
        </div>
    )
}
export default QuemSomosSegundap;