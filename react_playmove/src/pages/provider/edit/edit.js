import React, { useEffect,useState } from 'react';
import axios from 'axios';

import {useHistory, useParams} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import HeaderProvider from '../../../components/HeaderProvider/headerProvider';
import './edit.css'

const validationPost = yup.object().shape({
    Name: yup.string().required("O nome  é obrigatório").max(40, "O nome precisa ter menosde 40 caracteres"),
    document: yup.number().required("Cnpj é obrigatório").max(14," precisa ter  14 caracteres").min(14,"Precisa ter 14 caracteres"),
    company: yup.string().required(" é obrigatório")
})

export const useFantasyName = () =>{
    const [fanstasyName,setFantasyName] = useState([])
    useEffect(() => {
            fetch("https://localhost:44303/api/Providers")
            .then((response) => response.json())
            .then((data) => setFantasyName(data))
        }, []);
        return{
            fanstasyName
        };
    };

function EditProvider()
{
    const {fanstasyName} = useFantasyName()
    const { id } = useParams()

    let history = useHistory()

    
    const addPost = data => axios.put(`https://localhost:44303/api/Providers/${id}`, data)
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
        axios.get(`https://localhost:44303/api/Providers/${id}`)
        .then((response) => {
            reset(response.data)
        })
        
    }, [])

    return(
        <div>
            <HeaderProvider />

            <main>

            <div className="card-post" >

                <h1>Editar fornecedor</h1>
                <div className="line-post" ></div>

                <div className="card-body-post" >

                <form onSubmit={handleSubmit(addPost)} >

                <div className="fields" >
                    <label>Fornecedor</label>
                    <input type="text" name="name" {...register("name")} />
                    <p className="error-message">{errors.name?.message}</p>
                </div>
                
                <div className="fields" >
                    <label>Telefone</label>
                    <input type="phone" name="phone" {...register("phone")} />
                    <p className="error-message">{errors.phone?.message}</p>
                </div>

                <div className="fields" >
                    <label>Documento</label>
                    <input type="number" name="document" {...register("document")} />
                    <p className="error-message">{errors.document?.message}</p>
                </div>
                
                <div className="fields" >
                    <label>Data de registo</label>
                    <input datatype="datetime" name="date" {...register("date")} />
                    <p className="error-message">{errors.date?.message}</p>
                </div>
                <div className="fields" >
                    <label>Numero Credencial da companhia</label>
                    <input datatype="companyId" name="companyId" {...register("companyId")} />
                    <p className="error-message">{errors.companyId?.message}</p>
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

export default EditProvider