import React from "react";

import Header from '../../../components/HeaderProvider/headerProvider'

function PostProvider(){
    return(
        <div>
            <HeaderProvider/>
                         <main>

                <div className="card-post" >

                    <h1>Adicionar Companhia</h1>
                    <div className="line-post" ></div>

                    <div className="card-body-post" >

                        <form onSubmit={handleSubmit(addPost)} >

                            <div className="fields" >
                                <label>Fornecedor</label>
                                <input type="text" name="fantastName" {...register("fantasyName")} />
                                <p className="error-message">{errors.fantasyName?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Documento</label>
                                <input type="number" name="document" {...register("document")} />
                                <p className="error-message">{errors.document?.message}</p>
                            </div>
                            <div className="fields" >
                                <label>Telefone</label>
                                <input type="tel" name="phone" {...register("phone")} />
                                <p className="error-message">{errors.phone?.message}</p>
                            </div>
                            <div className="fields" >
                                <label>Data</label>
                                <input type="datetime" name="data" {...register("data")} />
                                <p className="error-message">{errors.data?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Companhia</label>
                                <select {...register("fantasyName", { required: true })}>
                                    <option value="fanstasyName">{fantasyName}</option>
                                </select>
                                <p className="error-message">{errors.fantasyName?.message}</p>
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