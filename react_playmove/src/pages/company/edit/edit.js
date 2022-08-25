import React, { useEffect } from "react";
import axios from "axios";

import {useHistory, useParams} from "react-router-dom"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Header from "../../../components/Header/header";
import "./edit.css"

const validationPost = yup.object().shape({
    fantasyName: yup.string().required("O nome  é obrigatório").max(40, "O nome precisa ter menosde 40 caracteres"),
    cnpj: yup.number().required("Cnpj é obrigatório").max(14," precisa ter  14 caracteres").min(14,"Precisa ter 14 caracteres"),
    uf: yup.string().required("UF é obrigatório")
})

function EditCompany()
{
    const { id } = useParams()

    let history = useHistory()

    
    const addPost = data => axios.put(`https://localhost:44303/api/Companies/${id}`, data)
    .then(() => {
        console.log("Deu tudo certo")
        history.push("/")
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationPost)
    })

    useEffect(() => {
        axios.get(`https://localhost:44303/api/Companies/${id}`)
        .then((response) => {
            reset(response.data)
        })
        
    }, [])

    return(
        <div>
            <Header />

            <main>

            <div className="card-post" >

                <h1>Editar companhia</h1>
                <div className="line-post" ></div>

                <div className="card-body-post" >

                <form onSubmit={handleSubmit(addPost)} >

                <div className="fields" >
                    <label>Companhia</label>
                    <input type="text" name="fantastName" {...register("fantasyName")} />
                    <p className="error-message">{errors.fantasyName?.message}</p>
                </div>

                <div className="fields" >
                    <label>Cnpj</label>
                    <input type="number" name="cnpj" {...register("cnpj")} />
                    <p className="error-message">{errors.cnpj?.message}</p>
                </div>

                        <div className="fields">
                            <label>Uf</label>
                            <select {...register("uf", { required: true })}>
                                <option value="AM">AM</option>
                                <option value="SP">SP</option>
                                <option value="MG">MG</option>
                                <option value="DF">DF</option>
                            </select>
                            <p className="error-message">{errors.uf?.message}</p>
                             </div>
                                 <div className="btn-post" >
                                    <button type="submit" >Atualizar Cadastro </button>
                                </div>

                        </form>

                    </div>

               </div>

            </main>
        </div>
    )
}

export default EditCompany