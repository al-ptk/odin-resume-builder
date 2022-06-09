import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <h2>Informações Gerais</h2>
        <hr />
        <form className="input-field">
          <input type="text" id="basic-name" placeholder="Nome" />
          <input type="text" id="basic-address" placeholder="Endereço" />
          <input type="text" id="basic-email" placeholder="Email" />
          <input type="text" id="basic-telefone" placeholder="Telefone" />
        </form>
        <h2>Formações Acadêmicas</h2>
        <hr />
        <form className="input-field">
          <input type="text" id="course1-name" placeholder="Curso" />
          <input type="text" id="course1-instution" placeholder="Instituição" />
          <input type="text" id="course1-start" placeholder="Data de Início" />
          <input
            type="text"
            id="course1-finish"
            placeholder="Data de Término"
          />
        </form>
        <h2>Experiências Profissionais</h2>
        <hr />
        <form className="input-field">
          <input type="text" id="job1-company" placeholder="Empresa" />
          <input type="text" id="job1-position" placeholder="Cargo" />
          <input type="text" id="job1-start" placeholder="Data de Início" />
          <input
            type="text"
            id="job1-finish"
            placeholder="Data de Término"
          />
        </form>
      </div>
    );
  }
}
