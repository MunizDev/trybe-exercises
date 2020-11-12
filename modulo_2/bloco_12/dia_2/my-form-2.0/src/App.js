import React from "react";
import DadosPessoais from "./DadosPessoais";
import InfoLastJob from "./InfoLastJob";
import GenerateCv from "./GenerateCv";

const initialState = {
  nome: "",
  email: "",
  cpf: "",
  address: "",
  city: "",
  estadosBrasil: "AC",
  type: "",
  cv: "",
  cargo: "",
  cargoDesc: "",
  cvGenerated: "",
};

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = initialState;
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleFormReset = () => {
    this.setState(() => initialState);
  };

  render() {
    return (
      <form
        onReset={this.handleFormReset}
        onSubmit={(e) => {
          e.preventDefault();
          this.setState({ cvGenerated: <GenerateCv resume={this.state} /> });
        }}
      >
        <div className="infos">
          <DadosPessoais handleChange={this.handleChange} />
          <InfoLastJob handleChange={this.handleChange} />
          <div>
            <input type="submit" value="Gerar Currículo" />
            <input type="reset" value="Limpar" />
          </div>
          <div>{this.state.cvGenerated}</div>
        </div>
      </form>
    );
  }
}

export default App;
