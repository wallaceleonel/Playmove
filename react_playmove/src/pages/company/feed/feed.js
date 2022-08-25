import React,{useState,useEffect} from "react";
import{Link} from "react-router-dom"
import axios from "axios"
import HeaderMain from "../../../components/HeaderMain/HeaderMain";
import"./feed.css"
import More from "../../../images/more.svg"
import api from "../../../api/NetCoreApi";
function FeedCompany(){

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        axios.get("https://localhost:44303/api/Companies")
        .then((response) => {
            setPosts(response.data)
        })

        .catch(() => {
            console.log("Deu errrado")
        })

    }, [])

    function deletePost(id) {

        axios.delete(`https://localhost:44303/api/Companies/${id}`)

        setPosts(posts.filter(post => post._id !== id ))

    }


    return(
        <div>

            <HeaderMain />

            <main>

                <div className="cards">

                    {posts.map((post, key) => {

                        return(
                            
                            <div className="card" key={key} >

                                <header>
                                    <h2>{post.FantasyName}</h2>
                                    <img src={More} />
                                </header>

                                <div className="line"></div>

                                <p>{post.Cnpj}</p>
                                <p>{post.Uf}</p>

                                <div className="btns" >

                                    <div className="btn-edit" >
                                        <Link to={{ pathname: `/edit/${post._id}` }} >
                                            <button>Edit</button>
                                        </Link>
                                    </div>
                                    <div className="btn-delete" >
                                        <button onClick={() => deletePost(post._id) } >delete</button>
                                    </div>

                                </div>
                            </div>
                        )

                    })}

                    
                </div>

            </main>
            
        </div>
    )
}

export default FeedCompany