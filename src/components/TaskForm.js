import React from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { addTask } from '../actions/index';

class TaskForm extends React.Component {
  state = {
    taskName: '',
    description: '',
    taskNameError: '',
    descriptionError: ''
  };

  componentDidMount() {
    M.AutoInit();
  }

  //validate function
  validate = () => {
    let taskNameError = '';
    let descriptionError = '';

    if (!this.state.taskName) {
      taskNameError = 'Please do not leave this blank';
    }

    if (!this.state.description) {
      descriptionError = 'Please do not leave this blank';
    }

    if (taskNameError || descriptionError) {
      this.setState({ taskNameError, descriptionError });
      return true;
    }
    return false;
  };

  // onTaskSubmit = event => {
  //   event.preventDefault();

  //   const error = this.validate();
  //   if (error) {
  //     return;
  //   }

  //   this.props.onSubmit({
  //     taskName: this.state.taskName,
  //     description: this.state.description
  //   });
  //   this.setState({
  //     taskName: '',
  //     description: '',
  //     taskNameError: '',
  //     descriptionError: ''
  //   });
  // };

  render() {
    return (
      <div className="row">
        <h2>Add a New Task</h2>
        <form
          className="col s12"
          autoComplete="off"
          onSubmit={e => {
            e.preventDefault();
            this.props.addTask(this.state);
          }}
        >
          <div className="row">
            <div className="input-field col s6">
              <input
                id="task_name"
                type="text"
                maxLength="25"
                value={this.state.taskName}
                onChange={e => this.setState({ taskName: e.target.value })}
              />
              <label htmlFor="task_name">Task Name</label>
            </div>
          </div>
          {/*Edit this part for the taskNameError*/}
          <div className="row" style={{ color: 'red' }}>
            <div className="input-field col s6">{this.state.taskNameError}</div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="description"
                type="text"
                maxLength="50"
                value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })}
              />
              <label htmlFor="description">Description</label>
            </div>
          </div>
          {/*Edit this part for the description Error*/}
          <div className="row" style={{ color: 'red' }}>
            <div className="input-field col s12">
              {this.state.descriptionError}
            </div>
          </div>
          <button className="btn right" type="submit">
            <i className="material-icons right">add</i>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTask }
)(TaskForm);
