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

  updateInput = (e) => {
    const attr = e.target.id.slice(`${this.id}-`.length);
    let value = e.target.value;
    if (value === 'on') {
      value = e.target.checked;
    }
    this.setState(Object.fromEntries([[attr, value]]), console.log(this.state));
  };

  render() {
    return (
      <div>
        <form className="input-field">
          <input
            onChange={this.updateInput}
            type="text"
            id={`${this.id}-name`}
            placeholder="Curso"
          />
          <input
            onChange={this.updateInput}
            type="text"
            id={`${this.id}-institution`}
            placeholder="Instituição"
          />
          <input
            onChange={this.updateInput}
            type="date"
            id={`${this.id}-startDate`}
            placeholder="Data de Início"
          />
          <input
            onChange={this.updateInput}
            type="checkbox"
            id={`${this.id}-onGoing`}
          />
          <label htmlFor={`${this.id}-onGoing`}>Em progresso?</label>
          <input
            onChange={this.updateInput}
            type="date"
            id={`${this.id}-finishDate`}
            placeholder="Data de Término"
          />
        </form>
      </div>
    );
  }
}
