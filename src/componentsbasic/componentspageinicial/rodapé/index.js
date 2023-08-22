import React from "react";
import logo from "../../../images/logosemfundo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Rodape = () =>{
    return (
        <footer className="rodape">
            <div>
                <img src={logo} className="logorodape" alt="logo sem fundo wd" />
            </div>
            <div>
                <ul>
                    <li>
                        <h5>Insitucional</h5>
                    </li>
                    <li>
                        <p>Quem somos</p>
                    </li>
                    <li> 
                        <p>Onde estamos</p>
                    </li>
                    <li>
                        <p>Missão, visão e valores</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h5>Suporte</h5>
                    </li>
                    <li>
                        <p>Endereço</p>
                    </li>
                    <li>
                        <p>Telefones</p>
                    </li>
                    <li>
                        <p>Contato</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>

                    <li>
                        <h5>Redes Sociais</h5>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/seuusuario" style={{textDecoration:'none', color:'white'}}>
                            <FontAwesomeIcon icon={faFacebook} style={{color:"white"}} /> 
                        </a>

                    </li>
                    <li>
                        <a href="https://www.instagram.com/seuusuario/" style={{textDecoration:'none', color:'white'}}>
                            <FontAwesomeIcon icon={faInstagram} /> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/seuusuario"style={{textDecoration:'none', color:'white'}}>
                            <FontAwesomeIcon icon={faYoutube} /> 
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Rodape;