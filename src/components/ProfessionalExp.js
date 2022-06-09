import { Component } from 'react';

export default class ProfessionalExp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      job: {
        name: '',
        company: '',
        startDate: '',
        onGoing: false,
        finishDate: '',
      },
    };
  }

  render() {
    return (
      <div>
        <header className="category-header">
          <h2>Experiências Profissionais</h2>
          <button>+</button>
        </header>
        <hr />
        <form className="input-field">
          <input type="text" id="job1-company" placeholder="Empresa" />
          <input type="text" id="job1-position" placeholder="Cargo" />
          <input type="date" id="job1-start" placeholder="Data de Início" />
          <input type="checkbox" id="job1-isFinished" />
          <label htmlFor="job1-isFinished">Em progresso?</label>
          <input type="date" id="job1-finish" placeholder="Data de Término" />
        </form>
      </div>
    );
  }
}
