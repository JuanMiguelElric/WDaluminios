import React from "react";
import {Route, Routes, BrowserRouter} from"react-router-dom";
import PrimeiraPage from "../screens/pageini";
import QuemSomos from "../componentsbasic/quemsomos/primeiraparte";

function Rotas () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrimeiraPage />}/>
                <Route path="/quemsomos" element={<QuemSomos />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;