import { createContext,useContext,useState } from "react";
import FormModal from "../components/FromModal/";
import { useAxios } from "../../hooks/useAxios";
import api from "../../api/NetCoreApi";
import { EditingCompanyContext } from "./EditingCompanyContext";
import Company from "../Companyindex";

export const FormModalContext = createContext();

export function FormModalProvider({children}){
    const { data, mutate} = useAxios("company");

    const [FantasyName,setFantasyName] = useState("");
    const [Cnpj,setCnpj] = useState("");
    const [Uf,setUf] = useState("");

    const {EditingCompany} = useContext(EditingCompanyContext);

    function handleEditMode(CompanyFantasyName,CompanyCnpj,CompanyUf){
        setFantasyName(CompanyFantasyName);
        setCnpj(CompanyCnpj);
        setUf(CompanyUf);
        openFormModal();
    }

    function submitForm(e){
        e.preventDefault();

        if(EditingCompany){
          api.put(`company/${EditingCompany}`,{
            FantasyName,
            Cnpj,
            Uf
          });
          
          const updateCompany = {
            Company: data.Company?.map((Company) =>{
                if (Company.Id == EditingCompany){
                    return {...Company,FantasyName,Cnpj,Uf};
                }
                return Company;
            }),
          };

          mutate(updateCompany,false);
        } else {
            const Company = {
                FantasyName,
                Cnpj,
                Uf,
            };
        
        api.post("Company",Company);

        const updateCompany = {
            Company:[...data.Company,Company],
        };

        mutate(updateCompany,false);
    }
    closeFormModal();

    function openFormModal(){
        setIsFormModalUp(true);
    }
    function closeFormModal(){
        setIsFormModalUp(false);
    }

    return(
        <FormModalContext.Provider
            value={{
                isFormModalUp,
                setIsFormModalUp,
                openFormModal,
                closeFormModal,
                handleEditMode,
                FantasyName,
                setFantasyName,
                Cnpj,
                setCnpj,
                Uf,
                setUf,
                submitForm,
            }}
            >
                {children}
                {isFormModalUp && <FormModal />}
            </FormModalContext.Provider>
        );
    }
 
}