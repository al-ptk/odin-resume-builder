import { Component } from 'react';

export default class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      email: '',
      phone:''
    }
  }

  render() {
    return (
      <div>
        <header className="category-header">
          <h2>Informações Gerais</h2>
        </header>
        <hr />
        <form className="input-field">
          <input type="text" id="general-name" placeholder="Nome" />
          <input type="text" id="general-address" placeholder="Endereço" />
          <input type="text" id="general-email" placeholder="Email" />
          <input type="text" id="general-telefone" placeholder="Telefone" />
        </form>
      </div>
    );
  }
}
