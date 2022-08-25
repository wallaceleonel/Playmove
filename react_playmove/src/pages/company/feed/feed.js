import React from "react";
import{Link} from "react-router-dom"
function FeedCompany(){
    return(
        <div>
            <h1>Pag feed company</h1>

            <Link to="/postCompany" >
                <button>Post company</button>
            </Link>
            
            <Link to = "/editCompany">
                <button>Edit company</button>
            </Link>
        
            <Link to ="/">
                <button>Home</button>
            </Link>
        </div>
    )
}

export default FeedCompany