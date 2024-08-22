import React from 'react';
import Perfil from "./perfil";
import HeadR from './head_route';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ViewP from './viewsP';
export default function Head(){
    return(
    <div className="inset-0 -z-10 h-full w-full items-center [background:radial-gradient(100%_100%_at_20%_11%,#161716_80%,#dde1dd_230%)]">
    <BrowserRouter>
    <HeadR/>
        <Routes>
            <Route path='/' element={<Perfil/>}/>
            <Route path='/proyects' element={<ViewP/>}/>
        </Routes>
    </BrowserRouter>
    
    </div>
    );
}