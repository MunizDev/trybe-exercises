import React from "react";
import EstadosBrasil from "./EstadosBrasil";

class DadosPessoais extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <fieldset className="personalData">
        <legend>Dados Pessoais</legend>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          maxLength="40"
          required="required"
          onChange={({ target }) => {
            target.value = target.value.toUpperCase();
            handleChange({ target });
          }}
        ></input>

        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          maxLength="50"
          required="required"
        ></input>

        <label>CPF</label>
        <input
          type="text"
          name="cpf"
          onChange={handleChange}
          maxLength="11"
          required="required"
        ></input>

        <label>Address</label>
        <input
          type="text"
          name="address"
          onChange={({ target }) => {
            target.value = target.value.replace(/[^0-9a-zA-Z\s]/g, "");
            handleChange({ target });
          }}
          maxLength="200"
          required="required"
        ></input>

        <label>Cidade</label>
        <input
          type="text"
          name="city"
          onChange={handleChange}
          onBlur={({ target }) => {
            target.value = /^\d/g.test(target.value) ? "" : target.value;
          }}
          maxLength="28"
          required="required"
        ></input>
        
        <div>
          <label>Estado</label>
          <EstadosBrasil funcao={handleChange} />

          <label>
            <input
              type="radio"
              name="type"
              value="casa"
              onChange={handleChange}
              required
            ></input>
            Casa
          </label>

          <label>
            <input
              type="radio"
              name="type"
              value="apartamento"
              onChange={handleChange}
            ></input>
            Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}

export default DadosPessoais;
