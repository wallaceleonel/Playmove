import React,{useState,useEffect} from "react";
import{Link} from "react-router-dom"
import axios from "axios"
import HeaderMainProvider from "../../../components/HeaderMainProvider/headerMainProvider"
import"./feed.css"
import More from "../../../images/more.svg"
function FeedProvider(){
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        axios.get("https://localhost:44303/api/Providers")
        .then((response) => {
            setPosts(response.data)
        })

        .catch(() => {
            console.log("Deu errrado")
        })

    }, [])

    function deletePost(id) {

        axios.delete(`https://localhost:44303/api/Providers/${id}`)

        setPosts(posts.filter(post => post.id !== id ))

    }


    return(
        <div>

            <HeaderMainProvider />

            <main>

                <div className="cards">

                    {posts.map((post, key) => {

                        return(
                            
                            <div className="card" key={key} >

                                <header>
                                    <h2>{post.name}</h2>
                                    <img src={More} />
                                </header>

                                <div className="line"></div>

                                <p>Telefone:  {post.phone}</p>
                                <p>Documento : {post.document}</p>
                                <p>Resgistrado em : {post.dateCredential}</p>
                                <p>Credenciado em : {post.companyId}</p>

                                <div className="btns" >

                                    <div className="btn-edit" >
                                        <Link to={{ pathname: `/editProvider/${post.id}` }} >
                                            <button>Editar</button>
                                        </Link>
                                    </div>
                                    <div className="btn-delete" >
                                        <button onClick={() => deletePost(post.id) } >Deletar</button>
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

export default FeedProvider