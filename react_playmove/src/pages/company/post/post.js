import React from "react";

import {Link} from "react-router-dom"

import Header from "../../../components/Header/header";

import {useForm} from 'react-hook-form'
import "./post.css"
function PostCompany(){

    const {register, handleSubmit, formState:{erros}} = useForm()

    return(
        <div>
            <Header/>

            <main>

                <div className="card-post">
                    <h1>Criar Cadastro</h1>
                    <div className="line-post"></div>

                    <div className="card-body-post">
                        <form>
                            <div className="fields">
                                <label>Nome Companhia</label>
                                <input type="text"/>

                                <label>Nome Companhia</label>
                                <input type="text"/>

                                <label>Nome Companhia</label>
                                <input type="text"/>

                                <label>Nome Companhia</label>
                                <select type="text"></select>
                            </div>

                            <div className="btn-post">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default PostCompany