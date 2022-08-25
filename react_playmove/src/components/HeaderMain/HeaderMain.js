import React from "react";

import {Link} from "react-router-dom"
import './HeaderMain.css'
function HeaderMain() {
    return (

        <header>
            <div className="container">
                <div className="logo">
                    <h1>Play Move Cadastros</h1>
                </div>
                <div className="btn-newPost">
                    <Link to ="/Post">
                        <button>Add new </button>
                    </Link>
                </div>
            </div>
        </header>

    )
}

export default HeaderMain