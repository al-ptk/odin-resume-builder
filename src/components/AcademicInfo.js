import { Component } from 'react';

export default class AcademicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      course: {
        name: '',
        institution: '',
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
          <h2>Formações Acadêmicas</h2>
          <button>+</button>
        </header>
        <hr />
        <form className="input-field">
          <input type="text" id="course1-name" placeholder="Curso" />
          <input type="text" id="course1-instution" placeholder="Instituição" />
          <input type="date" id="course1-start" placeholder="Data de Início" />
          <input type="checkbox" id="course1-isFinished" />
          <label htmlFor="course1-isFinished">Em progresso?</label>
          <input
            type="date"
            id="course1-finish"
            placeholder="Data de Término"
          />
        </form>
      </div>
    );
  }
}