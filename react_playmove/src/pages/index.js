import React from "react";

import{Link} from "react-router-dom"

import './index.css'

function index(){
    return(
        <div>
             <div className="name">
                 <h1>PLAYmove</h1>
            </div>
            <main>
           

           <div className="options">
                <Link to="/feedCompany" >
                    <button className="options"> Companhia </button>
                </Link>
            
                <Link to = "/feedProvider">
                    <button className="options">Fornecedores</button>
                </Link>
           </div>
           
           </main>
        </div>
    )
}

export default index