import './App.css';
import api from '.api';
import { Component } from 'react';

class App extends Component{

  state= {

    Fornecedores: [],
  }
  async componentDidMount()
  {
    const response = await api.get('');

    this.setState({Fornecedores : response.data});
  }

  render()
  {
    const {Fornecedores} = this.state;
    return(
      <div>
        <h1> fornecedores </h1>
        {Fornecedores.map(Fornecedores =>(
          <li key={Fornecedores.show.id}>
            <h2>
              <strong> Fornecedor : </strong>
              {Fornecedores.show.name}
            </h2>
          </li>
        ))}
      </div>
    )
  }
}

export default App;
