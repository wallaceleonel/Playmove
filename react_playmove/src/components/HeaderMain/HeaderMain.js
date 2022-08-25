import React from 'react'

import { Link } from 'react-router-dom'

import './headerMain.css'

function HeaderMain() {
    return (

        <header>
            <div className="container">
                <div className="logo" >
                    <a><Link to={"/"}>
                    <h1>PLAYmove</h1>
                    </Link>
                    </a>
                </div>

                <div className="btn-newPost" >

                    <Link to="/postCompany" >
                        <button>Adicionar Companhia </button>
                    </Link>

                </div>
            </div>
        </header>

    )
}

export default HeaderMain