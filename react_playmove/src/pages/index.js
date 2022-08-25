import React from "react";

import{Link} from "react-router-dom"

import Header from "../components/Header/header";

function index(){
    return(
        <div>
            <Header>
            <Link to="/feedCompany" >
                <button>company</button>
            </Link>
            
            <Link to = "/feedProvider">
                <button>provider</button>
            </Link>
            </Header>
        </div>
    )
}

export default index