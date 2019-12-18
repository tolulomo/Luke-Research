import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm} from 'redux-form';
import * as actions from './../../store/actions/users';
import * as projectActions from './../../store/actions/project';


class AddUser extends Component {

  state = {
    name: null,
    dept: null,
    pid: null,
    role: null
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    await this.props.actions.submitUserForm({...this.state});
    await this.props.projectActions.fetchProject(this.state.pid);
    this.props.history.goBack();
  }

  render() {
    return (
      <main className="wrapper">
        <div className="u__stage">
          <div className="project">
            <div className="project--side-pane"></div>
            <div className="project--indicator"></div>
              <div className="project__details u__padding-top">
                <h2>Project SLN</h2>
                <div className="project__details--status u__accent"> Add A New User</div>
              </div>
              <div className="project__form">
                <form className="form">
                  <div className="form__group">
                    <input type="text" className="form__input" name="name" placeholder="Name" id="name" onChange={val => this.setState({ name:val.target.value, pid:this.props.match.params.id })} required/>
                    <label htmlFor="name" className="form__label">Name</label>
                  </div>

                  <div className="form__group">
                    <input type="text" className="form__input" placeholder="Department" id="dept" 
                    name="dept" onChange={val => this.setState({ dept:val.target.value })} required />
                    <label htmlFor="dept" className="form__label">Department</label>
                  </div>

                  <div className="project__form--role">
                    <h2>Role:</h2>

                    <ul className="form__group">
                      <li>
                          <div className="form__radio-group">
                              <input type="radio" className="form__radio-input" id="pi" name="role" onChange={() => this.setState({ role:'PI' })} />
                              <label htmlFor="pi" className="form__radio-label">
                                  <span className="form__radio-button"></span>
                                  PI
                              </label>
                          </div>
                      </li>
                      <li>
                        <div className="form__radio-group">
                            <input type="radio" className="form__radio-input" id="KeyPersonnel" name="role" onChange={() => this.setState({ role:'Key Personnel' })} />
                            <label htmlFor="KeyPersonnel" className="form__radio-label">
                                <span className="form__radio-button"></span>
                                Key Personnel
                            </label>
                        </div>
                      </li>
                      <li>
                        <div className="form__radio-group">
                            <input type="radio" className="form__radio-input" id="GrantAdministrator" name="role" onChange={() => this.setState({ role:'Grant Administrator' })}/>
                            <label htmlFor="GrantAdministrator" className="form__radio-label">
                                <span className="form__radio-button"></span>
                                Grant Administrator
                            </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="project__footer">
                      <ul>
                          <li><button onClick={this.handleSubmit} className="button button--blue button--submit button--extra">&#x0002B; Submit</button></li>
                          <li><Link to="/" className="button button--blue">&#x003A7; Cancel</Link></li>
                      </ul>
                </div>
              </form>
              </div>
          </div>
        </div>
      </main>
    );
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    projectActions: bindActionCreators(projectActions, dispatch),
    actions: bindActionCreators(actions, dispatch),
  }
}
AddUser = connect(null, mapDispatchToProps)(AddUser);



//Decided not to use redux form anymore cos it altering the input responsiveness
export default reduxForm({
  form: 'userForm',
  destroyOnUnmount: true
})(AddUser);
