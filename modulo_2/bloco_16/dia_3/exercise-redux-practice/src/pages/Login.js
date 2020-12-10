import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { authenticate } from '../action/actionAuthenticate';

class Login extends React.Component {
  render() {
    const { authenticated, logIn } = this.props;
    if (authenticated) {
      alert('login efetuado parabéns');
      return <Redirect to="/clientes" />;
    }
    return (
      <div>
        <h1>Login</h1>
        <input placeholder="email" />
        <input placeholder="senha" />
        <button onClick={logIn}>Logar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.loggedInReducer.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  logIn: () => {
    dispatch(authenticate());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
