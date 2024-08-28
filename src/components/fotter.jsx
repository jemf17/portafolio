import React from "react";

export default function Fotter(){
    const date = new Date()
    return(
    <footer className='backdrop-blur-sm text-white bg-gray-950/10 p-8 text-center w-full'>
      <p className="py-3">Made with by <span className="text-yellow-500">Python jemf.py</span></p>
      <p className="py-1">© 2024-{date.getFullYear()}</p>
    </footer>
    );
}