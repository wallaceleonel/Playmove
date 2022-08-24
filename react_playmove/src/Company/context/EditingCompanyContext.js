import { func } from "prop-types";
import { createContext,useState } from "react";

export const EditingCompanyContext = createContext();

export function EditingCompanyContextProvider({children}){
    const [editingCompany,setEditingCompany] = useState(false);

    return(
        <EditingCompanyContext.Provider value={(editingCompany,setEditingCompany)}>
            {children}
        </EditingCompanyContext.Provider>
    );
}