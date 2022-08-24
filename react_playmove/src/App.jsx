import React from "react";
import Layout from "./Company/components/Layout"
import GlobalStyles from "./styles"
import {FormModalProvider} from "./Company/context/FormModalContext"
import {EditingCompanyProvider} from "./Company/context/EditingCompanyContext"

export default function App(){

  return(
    <>
    <EditingCompanyProvider>
      <FormModalProvider>
        <Layout/>
      </FormModalProvider>
    </EditingCompanyProvider>
    <GlobalStyles/>
    </>
  );
}
