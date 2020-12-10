import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ClientesCadastrados from './pages/ClientesCadastrados';
import CadastroDeClientes from './pages/CadastroDeClientes';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/clientes" component={ClientesCadastrados} />
        <Route path="/cadastro" component={CadastroDeClientes} />
      </Switch>
    </div>
  );
}

export default App;
