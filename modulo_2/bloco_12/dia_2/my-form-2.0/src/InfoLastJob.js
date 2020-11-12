import React from "react";

class InfoLastJob extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <fieldset className="lastJob">
        <legend>Ultimo Emprego</legend>

        <label>Resumo do currículo</label>
        <textarea
          name="cv"
          maxLength="1000"
          required="required"
          onChange={handleChange}
        ></textarea>

        <label>Cargo</label>
        <textarea
          name="cargo"
          maxLength="40"
          required="required"
          onChange={handleChange}
          onMouseEnter={() => {
            alert("Preencha com cuidado esta informação.");
          }}
        ></textarea>

        <label>Descrição do cargo</label>
        <input
          type="text"
          name="cargoDesc"
          onChange={handleChange}
          maxLength="500"
          required="required"
        ></input>
      </fieldset>
    );
  }
}

export default InfoLastJob;
