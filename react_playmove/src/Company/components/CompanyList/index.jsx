import React from "react";
import AddCompany from "../AddCompany";

import { useAxios } from "../../../hooks/useAxios";
import Company from "../Company";

import { Container, CompanyListWrapper } from "../Company/styles";

export default function CompanyList() {
    const {data} =useAxios(`company`);

    return (
        <Container>
            <CompanyListWrapper>
                {data?.Company.map((Company) =>(
                    <Company
                    key={Company.Id ? Company.Id : Math.random()}
                    Id ={Company.Id}
                    FantasyName = {Company.FantasyName}
                    Cnpj ={Company.Cnpj}
                    Uf ={Company.Uf}
                    />
                ))}
                <AddCompany/>
            </CompanyListWrapper>
        </Container>
    )
}