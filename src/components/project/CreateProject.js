import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../store/actions/project';


class CreateProject extends Component {

    state = {
        name: null,
        sponsor: null,
        sdate: null,
        edate: null
    }

    handleSubmit = async(e) => {
        if(!e) {
            return;
        }
        e.preventDefault();
        this.props.createProject({...this.state});
    }

  render() {
    return (
        <main className="wrapper">
            <div className="u__stage">
                <div className="project">
                    <div className="project--side-pane"></div>
                    <div className="project--indicator"></div>
                    <div className="project__details u__padding-top">
                        <h2>Create A New Project</h2> 
                    </div>
                    <div className="project__form">
                        <form onSubmit={this.handleSubmit} className="form">
                            <div className="form__group">
                                <input type="text" className="form__input" placeholder="Project Name" name="name" id="name" onChange={val => this.setState({ name:val.target.value })}  required />
                                <label htmlFor="name" className="form__label">Project Name</label>
                            </div>
                            <div className="form__group">
                                <input type="text" className="form__input" placeholder="Project Sponsor" name="sponsor" onChange={val => this.setState({ sponsor:val.target.value })} id="sponsor" required />
                                <label htmlFor="sponsor" className="form__label">Project Sponsor</label>
                            </div>
                        <div className="row row--gutter">
                            <div className="column-2-of-4 u__to-top">
                                <div className="form__group">
                                    <input type="date" className="form__input" placeholder="Start Date" id="sd" name="sdate" onChange={val => this.setState({ sdate:val.target.value })} required />
                                    <label htmlFor="sd" className="form__label">Start Date</label>
                                </div>
                            </div>
                            <div className="column-2-of-4">
                                <div className="form__group">
                                    <input type="date" className="form__input" placeholder="End Date" name="edate" onChange={val => this.setState({ edate:val.target.value })} id="ed" required />
                                    <label htmlFor="ed" className="form__label">End Date</label>
                                </div>
                            </div>
                        </div> 
                        <div className="project__footer">
                        <ul>
                            <li><button type="submit" className="button button--blue button--submit button--extra">&#x0002B; Submit</button></li>
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

export default connect(null, actions)(CreateProject);
