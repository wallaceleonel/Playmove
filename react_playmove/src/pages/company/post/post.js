import React from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"
import Header from "../../../components/Header/header";

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import "./post.css"

const validationPost = yup.object().shape({
    fantasyName: yup.string().required("O nome  é obrigatório").max(40, "O nome precisa ter menosde 40 caracteres"),
    cnpj: yup.number().required("Cnpj é obrigatório").max(14," precisa ter  14 caracteres").min(14,"Precisa ter 14 caracteres"),
    uf: yup.string().required("UF é obrigatório")
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
                                <input type="number" name="Cnpj" {...register("Cnpj")} />
                                <p className="error-message">{errors.Cnpj?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Uf</label>
                                <select {...register("Uf", { required: true })}>
                                    <option value="AM">AM</option>
                                    <option value="SP">SP</option>
                                    <option value="MG">MG</option>
                                    <option value="DF">DF</option>
                                </select>
                                <p className="error-message">{errors.uf?.message}</p>
                            </div>

                            <div className="btn-post" >
                                <button type="submit" > Cadastrar companhia </button>
                            </div>

                        </form>

                    </div>

                </div>

            </main>

        </div>
    )
}

export default PostCompany