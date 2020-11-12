import React from "react";

class GenerateCv extends React.Component {
  render() {
    const {
      nome,
      email,
      cpf,
      address,
      city,
      estadosBrasil,
      type,
      cv,
      cargo,
      cargoDesc,
    } = this.props.resume;
    return (
      <div>
        <p>Dados Pessoais</p>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Address: {address}</p>
        <p>Cidade: {city}</p>
        <p>Estado: {estadosBrasil}</p>
        <p>Tipo: {type}</p><br></br>
        <p>Dados Pessoais</p>
        <p>Resumo Currículo: {cv}</p>
        <p>Cargo: {cargo}</p>
        <p>Desc. Cargo: {cargoDesc}</p>
      </div>
    );
  }
}

export default GenerateCv;
