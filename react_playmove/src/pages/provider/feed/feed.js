import React from "react";
import{Link} from "react-router-dom"
function FeedProvider(){
    return(
        <div>
            <h1>Pag feed provider</h1>

            <Link to="/postProvider" >
                <button>Post company</button>
            </Link>
            
            <Link to = "/editProvider">
                <button>Edit company</button>
            </Link>

            <Link to ="/">
                <button>Home</button>
            </Link>

        </div>
    )
}

export default FeedProvider