import React from 'react'

import { Link } from 'react-router-dom'

import './headerMain.css'

function HeaderMain() {
    return (

        <header>
            <div className="container">
                <div className="logo" >
                    <Link to={"/"}>
                    <h1>Play Move Cadastros</h1>
                    </Link>
                </div>

                <div className="btn-newPost" >

                    <Link to="/post" >
                        <button>Add new </button>
                    </Link>

                </div>
            </div>
        </header>

    )
}

export default HeaderMain