import React from "react";
import {Link} from "react-router-dom";

export default function HeadR(props) {
    return(
        <header>
            <nav className="bg-white/2 ">
                <div className="bg-white/1">
                    <ul className="bg-white/2 head" aria-labelledby="dropdownLargeButton">
                    <li></li>
                    <li>
                    <Link to='/portafolio'className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> About me</Link> 
                    </li>
                    <li>
                    <Link to='/proyects'className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Proyects</Link>
                    </li>
                    <li></li>
                    </ul>
                </div>    
            </nav>
        </header>
    );
}