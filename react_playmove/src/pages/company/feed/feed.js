import React from "react";

import{Link} from "react-router-dom"

import HeaderMain from "../../../components/HeaderMain/HeaderMain";
function FeedCompany(){

    return(
        <div>
            <HeaderMain/>
            
            <Link to ="/">
                <button>Home</button>
            </Link>

        </div>
    )
}

export default FeedCompany