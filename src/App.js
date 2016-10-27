import React, { Component } from 'react';
import ValidateField from 'validate-field-react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        age: '',
        comment: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFieldChange(value, name) {
    const formData = Object.assign(this.state.formData, {
      [name]: value
    });
    this.setState({formData});
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state);

    return false;
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Form Validation</h2>
        </div>
        <div className="App-content">
          <form>
            <div className="form-field">
              <label className="label" htmlFor="name">Name</label>
              <ValidateField
                isNumeric={false}
                isRequired
                minLength={2}
                message={{
                  isNumeric: 'Your name cannot be numeric',
                  isRequired: 'Please enter your name'
                }}
              >
                <input
                  className="text-input"
                  type="text"
                  id="name"
                  onChange={e => this.handleFieldChange(e.target.value, 'name')}
                  value={this.state.formData.name.value}
                />
              </ValidateField>
            </div>
            <div className="form-field">
              <label className="label" htmlFor="age">Age</label>
              <ValidateField
                isRequired
                isNumeric
                message={{
                  isRequired: 'Please enter your age',
                  isNumeric: 'Your age should be a number'
                }}
              >
                <input
                  className="text-input"
                  type="text"
                  id="age"
                  onChange={e => this.handleFieldChange(e.target.value, 'age')}
                  defaultValue={this.state.formData.age.value}
                />
              </ValidateField>
            </div>
            <div className="form-field">
              <label className="label" htmlFor="comment">Comment</label>
              <ValidateField
                isRequired
                minLength={50}
                maxLength={250}
                message={{
                  isRequired: 'Please enter your comment',
                  minLength: 'Please provide at least 50 characters in your comment',
                  maxLength: 'Please keep your comments below 250 characters'
                }}
              >
                <textarea
                  className="text-input"
                  id="comment"
                  onChange={e => this.handleFieldChange(e.target.value, 'comment')}
                  defaultValue={this.state.formData.comment.value}
                />
              </ValidateField>
            </div>
            <div className="form-field">
              <button className="button" type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
