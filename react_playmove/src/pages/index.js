import React from "react";

import{Link} from "react-router-dom"

function index(){
    return(
        <div>
            
            <Link to="/feedCompany" >
                <button>company</button>
            </Link>
            
            <Link to = "/feedProvider">
                <button>provider</button>
            </Link>

        </div>
    )
}

export default index