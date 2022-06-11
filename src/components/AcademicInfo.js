import { Component } from 'react';
import AcademicInstance from './AcademicInstance';
import uniqid from 'uniqid';

export default class AcademicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
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
        <AcademicInstance uId={uniqid()} />
      </div>
    );
  }
}
