import './App.css';
import React from 'react';

import {useState, useEffect} from 'react';
import axios from 'axios';

function App(){

  const baseUrl = 'https://localhost:44303/api/Providers';

  const [data,setData]=useState([]);
  
  const ProvidersGet = async() =>{
      await axios.get(baseUrl)
      .then(response =>{
          setData(response.data);
      }).catch(error =>{
          console.log(error);
      })
    }

    useEffect(() =>{
      ProvidersGet();
    })

    return(
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
  }

export default App;