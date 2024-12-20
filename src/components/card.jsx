import React from "react";

export default function Card(props) {
    console.log(props.titule)
    return(
        <div className="pt-5 px-5 self-auto">
            <a href={props.link} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark: dark:bg-black dark:hover:bg-yellow-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={props.imagen} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.titule}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.descripcion}</p>
                </div>
            </a>
        </div>   
    );
}