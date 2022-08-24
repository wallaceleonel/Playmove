import React, { useContext } from "react";

import api from "../api/NetCoreApi";
import { EditingCompanyContext } from "../../context/EditingCompanyContext";
import { FormModalContext } from "../../context/FormModalContext";
import { useAxios } from "../../../hooks/useAxios";
import { Container,ButtonArea,Button } from "./styles";

export default function Company({Id,FantasyName,Uf,Cnpj}){
    const {handleDeleteMode} = useContext(FormModalContext);
    const {handleEditingMode} = useContext(EditingCompanyContext);

    const {data, mutate} = useAxios("Company");

    function handleEditingMode(){
        api.patch(`/Company/${Id}`);
        
        const updateCompany = {
            Company: data.Company?.map((Company) =>{
                if(Company.Id == Id){
                    return{...Company,FantasyName,Cnpj,Uf};
                }
                return Company;
            }),
        };
        mutate(updateCompany,false);
    }
    function handleDeleteMode(){
        api.delete(`/Company/${Id}`);

        const updateCompany = {
            Company: data.Company?.filter((Company) => Company.Id !== Id),
        };

        mutate(updateCompany,false);
    }

    function handleEdit(){
        handleEditingMode(FantasyName,Cnpj,Uf);
        setEditingCompany(Id);
    }
    return(
        <li key={Id}>
            <container>
                <h2>{FantasyName}</h2>
                <h2>{Cnpj}</h2>
                <h2>{Uf}</h2>
                <buttonArea>
                    <button onClick={handleEdit}>
                        Editar
                    </button>
                </buttonArea>
                <button onClick={handleDele}>
                    Excluir
                </button>
            </container>
        </li>
    )
}