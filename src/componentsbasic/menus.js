import React, {useState} from "react";
import "../App.css";
import logo from  "../images/logosemfundo.png";
import { FaSquare } from 'react-icons/fa';
import hamburguer from "../images/hamburguer.png"
import { Link } from "react-router-dom";
const Menu = () =>{
    const [toogle,setToogle] = useState(false);
    const hamburguertoogle= ()=>{
        setToogle(!toogle);
    }
    return(
        <div className="menu">
            <ul className="ulmenu">
                <li >
                    <img src={logo} className="logo" alt="logo Wd"/>

                </li>
                <li className="Afastar removeTelpeq" style={{color:"#de5600"}}> Home</li>
                <li className="removeTelpeq" >
                    
                    <Link to="/quemsomos">
                        Quem somos
                    </Link>
                </li>
                <li className="removeTelpeq" > PRODUTOS</li>
                <li className="removeTelpeq" > LOCALIZAÇÃO</li>
                <li className="removeTelpeq"> <button className="buttonnobackground remove removetelamedia">CONTATO</button></li>
                <li> <button onClick={hamburguertoogle} className="removeTelmed removeTelgrand" style={{background:'none'}}><img src={hamburguer} className="App-logo" alt="menuhanburguer" /></button></li>
                {toogle && (
                    <div className="menu-bar">
                        <button className="botaotogle" onClick={hamburguertoogle} ><FaSquare style={{ color: 'white', fontSize: '30px', background:"none"}} /></button>
                        <ul>
                            <br />
                            <br />
                            <li>
                                Home
                            </li>
                            <br />
                            <li>
                                Quem somos
                            </li>
                            <br />
                            <li> Produtos</li> <br />
                            <li>Localização</li> <br />
                            <li>Contato</li> <br />
                        </ul>
                    </div>
                )}
            </ul>
        </div>
    )
}
export default Menu;