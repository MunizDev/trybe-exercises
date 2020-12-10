import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ClientesCadastrados extends React.Component {
  render() {
    const { authenticated, clientesCadastrados } = this.props;
    if (!authenticated) {
      return (
        <div>
          <h1>Login não efetuado</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>Clientes Cadastrados</h1>
        <ul>
          {clientesCadastrados.length !== 0 ? (
            clientesCadastrados.map((client) => {
              return <li>{client.name}</li>;
            })
          ) : (
            <li>Nenhum cliente cadastrado</li>
          )}
        </ul>
        <Link to="/cadastro">Cadastrar Clientes</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.loggedInReducer.authenticated,
  clientesCadastrados: state.AddClientReducer,
});

export default connect(mapStateToProps, null)(ClientesCadastrados);
