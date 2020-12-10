import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addClient } from '../action/actionAddClient';

class CadastroDeClientes extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, age, email } = this.state;
    const { authenticated, add } = this.props;
    if (!authenticated) {
      return (
        <div>
          <h1>Login não efetuado</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>Cadastro De Clientes</h1>
        <input name="name" placeholder="nome" onChange={this.handleChange} />
        <input name="age" placeholder="idade" onChange={this.handleChange} />
        <input name="email" placeholder="email" onChange={this.handleChange} />
        <button onClick={() => add(name, age, email)}>Cadastrar</button>
        <br />
        <br />
        <Link to="/clientes">Clientes Cadastrados</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.loggedInReducer.authenticated,
  clientesCadastrados: state.AddClientReducer,
});

const mapDispatchToProps = (dispatch) => ({
  add: (name, age, email) => {
    dispatch(addClient(name, age, email));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CadastroDeClientes);
