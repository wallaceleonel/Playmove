import React from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"

import Header from "../../../components/Header/header";

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import "./post.css"

const validationPost = yup.object().shape({
    FantasyName: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
    Cnpj: yup.string().required("A descrição é obrigatório").max(150, "A descrição precisa ter menosde 150 caracteres"),
    Uf: yup.string().required("O conteúdo é obrigatório").max(500, "O conteúdo precisa ter menosde 500 caracteres")
})

function PostCompany(){

    let history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })

    const addPost = data => axios.post("https://localhost:44303/api/Companies", data)
    .then(() => {
        console.log("Deu tudo certo")
        history.push("/")
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })
    return(
        <div>
            <Header />

            <main>

                <div className="card-post" >

                    <h1>Adicionar Companhia</h1>
                    <div className="line-post" ></div>

                    <div className="card-body-post" >

                        <form onSubmit={handleSubmit(addPost)} >

                            <div className="fields" >
                                <label>Companhia</label>
                                <input type="text" name="FantastName" {...register("FantasyName")} />
                                <p className="error-message">{errors.FantasyName?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Cnpj</label>
                                <input type="text" name="Cnpj" {...register("Cnpj")} />
                                <p className="error-message">{errors.Cnpj?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Uf</label>
                                <textarea type="text" name="content" {...register("content")} ></textarea>
                                <p className="error-message">{errors.content?.message}</p>
                            </div>

                            <div className="btn-post" >
                                <button type="submit" > Cadastrar </button>
                            </div>

                        </form>

                    </div>

                </div>

            </main>

        </div>
    )
}

export default PostCompany