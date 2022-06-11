import { Component } from 'react';

export default class AcademicInstance extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.uId;
    this.state = {
      name: '',
      institution: '',
      startDate: '',
      onGoing: false,
      finishDate: '',
    };
  }

  handleChange = (e) => {
    const attr = e.target.id.slice(`${this.id}-`.length);
    const value = e.target.value;
    this.setState(Object.fromEntries([[attr, value]]), console.log(this.state));
  };

  render() {
    return (
      <div>
        <form className="input-field">
          <input
            onChange={this.handleChange}
            type="text"
            id={`${this.id}-name`}
            placeholder="Curso"
          />
          <input
            onChange={this.handleChange}
            type="text"
            id={`${this.id}-institution`}
            placeholder="Instituição"
          />
          <input
            onChange={this.handleChange}
            type="date"
            id={`${this.id}-startDate`}
            placeholder="Data de Início"
          />
          <input
            onChange={this.handleChange}
            type="checkbox"
            id={`${this.id}-onGoing`}
          />
          <label htmlFor={`${this.id}-onGoing`}>Em progresso?</label>
          <input
            onChange={this.handleChange}
            type="date"
            id={`${this.id}-finishDate`}
            placeholder="Data de Término"
          />
        </form>
      </div>
    );
  }
}
