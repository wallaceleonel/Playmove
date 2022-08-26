import React from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import HeaderProvider from '../../../components/HeaderProvider/headerProvider'
import { useEffect, useState } from "react";
const validationPost = yup.object().shape({
    Name: yup.string().required("O nome  é obrigatório").max(40, "O nome precisa ter menosde 40 caracteres"),
    Document: yup.number().required("Documento é obrigatório").max(14," precisa ter  14 caracteres").min(8,"Precisa ter 8 caracteres"),
    companyId: yup.number().required("Selecionar  companhia").positive().integer(),
    
})
(async () => {
    try {
      const schema = yup.object().shape({
            rg: yup.string().test(
                      'test-invalid-rg',
                      'rg inválido',
                      (rg) => rg.IsInvalid(rg))
      })
      await schema.validate({ rg: "122334456" })
    } catch (err) {
      throw new Error (err.message)
    }
    })()
export const useFantasyName = () =>{
    const [fanstasyName,setFantasyName] = useState([])
    useEffect(() => {
            fetch("https://localhost:44303/api/Companies")
            .then((response) => response.json())
            .then((data) => setFantasyName(data))
        }, []);
        return{
            fanstasyName
        };
    };

function PostProvider(){

   const{fanstasyName}=useFantasyName()

    let history = useHistory()
    const [setPosts ] = useState([])
    
    useEffect(() => {
        axios.get("https://localhost:44303/api/Providers")
        .then((response) => {
            setPosts(response.data)
        })

        .catch(() => {
            console.log("Deu errrado")
        })

    }, [])
    
    const { register, handleSubmit, formState: { errors}} = useForm({
        resolver: yupResolver(validationPost)
    })

    const addPost = data => axios.post("https://localhost:44303/api/Provider", data)
    .then(() => {
        console.log("Deu tudo certo")
        history.push("/")
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })
    return (

        <div>        
            <HeaderProvider/>

             <main>

                <div className="card-post">
                    
                    <h1> Adicionar Fornecedor </h1>
                    <div className="line-post"></div>

                    <div className="card-body-post" >

                        <form onSubmit={handleSubmit(addPost)} >

                            <div className="fields" >
                                <label>  Fornecedor </label>
                                <input type="text" name="name" {...register("name")} />
                                <p className="error-message">{errors.name?.message}</p>
                            </div>

                            <div className="fields" >
                                <label> Telefone </label>
                                <input type="tel" name="phone" {...register("phone")} />
                                <p className="error-message">{errors.phone?.message}</p>
                            </div>

                            <div className="fields" >
                                <label> RG/Cnpj </label>
                                <input type="number" name="document" {...register("document")} />
                                <p className="error-message">{errors.document?.message}</p>
                            </div>
                    
                            <div className="fields" >
                                <label> Data de registro </label>
                                <input type="date" name="date" {...register("date")} />
                                <p className="error-message">{errors.date?.message}</p>
                            </div>
                        
                            <div className="fields" >
                                <label>Numero Credencial da companhia</label>
                                <input datatype="companyId" name="companyId" {...register("companyId")} />
                                <p className="error-message">{errors.companyId?.message}</p>
                            </div>
                            <div className="btn-post" >
                                <button type="submit" > Cadastrar fornecedor </button>
                            </div>

                        </form>

                    </div>

                </div>

            </main>
        
        </div>
    )
}

export default PostProvider