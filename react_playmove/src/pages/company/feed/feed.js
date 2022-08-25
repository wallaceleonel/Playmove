import React,{useState,useEffect} from 'react';
import{Link} from 'react-router-dom'
import axios from 'axios'
import HeaderMain from '../../../components/HeaderMain/headerMain';
import'./feed.css'
import More from '../../../images/more.svg'
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

        setPosts(posts.filter(post => post.id !== id ))

    }


    return (
        <div>

            <HeaderMain />

            <main>

                <div className="cards">

                    {posts.map((post, key) => {

                        return(
                            
                            <div className="card" key={key} >

                                <header>
                                    <h2>{post.fantasyName}</h2>
                                    <img src={More} />
                                </header>

                                <div className="line"></div>

                                <p>Cnpj {post.cnpj}</p>
                                <p>Uf {post.uf}</p>

                                <div className="btns" >

                                    <div className="btn-edit" >
                                        <Link to={{ pathname: `/editCompany/${post.id}` }} >
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

export default FeedCompany