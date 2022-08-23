import './App.css';
import React, {useState, useEffect} from 'react';
function App(){

  const baseUrl = 'https://localhost:44303/api/Providers';

  const [data,setData]=useState([]);
  
  const fornecedoresGet = async() =>{
      await axios.get(baseUrl)
      .then(response =>{
          setData(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  useEffect(() =>{
      fornecedoresGet();
  })
  render()
  {
    const {Fornecedores} = this.state;
    return(
      <div>
        <tbody>
        {data.map(provider =>(
          <tr key={provider.id}>
            <td>{provider.id}</td>
            <td>{provider.name}</td>
            <td>{provider.document}</td>
            <td>{provider.phone}</td>
            <td>{provider.company}</td>
            <td>
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        ))}

        </tbody>
      </div>
    )
  }
}

export default App;
