import React, {useEffect, useState} from "react";
import axios from "axios";
import api from "../api/NetCoreApi";

export default function ProvisorList(){

    const[provider,setProvider] = useState([]);
    useEffect(() =>{
        api.get("api/provider").then(({data}) =>{
            setProvider(data);
        })
        console.log(provider);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

return (
    <div>
      <div className='App'>
        <header className='App-Header'>
            <button className='btn btn-sucess'> Inserir novo Fornecedor</button>
        </header>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Company</th>
              <th>Nanme</th>
              <th>Document</th>
              <th>Phone</th>
            </tr>
          </thead>
        </table>
      </div>
      <tbody>
      {data.map(provider =>(
        <tr key={provider.id}>
          <td>{provider.id}</td>
          <td>{provider.name}</td>
          <td>{provider.document}</td>
          <td>{provider.phone}</td>
          <td>{provider.company}</td>
          <td>
            <button>Editar</button> {"  "}
            <button>Excluir</button>
          </td>
        </tr>
      ))}
      </tbody>
    </div>
  );