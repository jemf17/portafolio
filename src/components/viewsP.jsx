import React from "react";
//import {select_all_proyects} from '../services/serviceproyects'
import data from '../db/proyecto.json'
import Card from "./card";
export default function ViewP(){
    return(
        <div className="container h-full text-white px-10 backdrop-blur-sm bg-white/10 p-6 rounded-xl">
            <h1 className="mb-4 pt-3 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My <span className="text-yellow-400">Proyects</span></h1>
            <div className="flex max-h-full flex-wrap justify-center mt-10 container content-center text-white px-10 backdrop-blur-sm bg-black/5 p-6 rounded-xl">
            {data.map((p)=>{
                if (p.imagen === "") {
                    return(<Card link={p.link} imagen={"https://i1.sndcdn.com/avatars-000478323243-0z3gca-t240x240.jpg"} titule={p.titulo} descripcion={p.descripcion}/>);
                }
                return(<Card link={p.link} imagen={p.imagen} titule={p.titule} descripcion={p.descripcion}/>);
            })}
            </div>
        </div>
    );
}