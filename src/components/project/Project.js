import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../store/actions/project';

class Project extends Component {
    
    state = {
        users: null,
        projectData: null,
    }

    async componentDidMount() {
       await this.getProject();
    }

    getProject = async() =>{
        await this.props.fetchProject(this.props.match.params.id);
        this.setState({users: this.props.proPage, projectData: this.props.project[0]});
    }

    deactivatedProject = async() => {
        await this.props.deactivateProj(this.props.match.params.id);
        this.setState({projectData: this.props.project[0]});
    }

    deleteUser = async(x) => {
        console.log(x);
        await this.props.deleteUser(x);
        return this.getProject();
    }


    render() {
        if(!this.state.users || !this.state.projectData ){
            return <div style={{backgroundColor:'#000', position: "fixed", top:'0', left:'0', right:'0', bottom:'0'}}></div>
        }
    
        return (
            <main className="wrapper">
                <div className="u__stage">
                    <div className="project">
                        <div className="project--side-pane"></div>
                        <div className="project--indicator"></div>
                        <div className="row row--gutter">
                        <div className="column-2-of-4">
                            <div className="project__details">
                                <h2>{`Project ${this.state.projectData.name}`}</h2>
                                <div className={`project__details--status u-${this.state.projectData.active}`}><span> </span> {`Active: ${this.state.projectData.active}`}</div>
                            </div>
                        </div>
                        <div className="column-2-of-4">
                            <ul>
                                {
                                    this.state.projectData.active ? 
                                    <li><a onClick={() => this.deactivatedProject()} className="button button--blue">De-Activate Project</a></li>:
                                    <li><a onClick={() => this.deactivatedProject()} className="button button--blue">Activate Project</a></li>
                                }
                                <li><Link to={`/add_user/${this.state.projectData.id}`}  className="button button--blue">+ &nbsp; Add User</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="project__chip">
                        <ul>
                            <li><div className="project__chip-list">{`Project Sponsor: ${this.state.projectData.sponsor}`}</div></li>
                            <li><div className="project__chip-list">{`Start Date: ${this.state.projectData.project_start_date}`}</div></li>
                            <li><div className="project__chip-list">{`End Date: ${this.state.projectData.project_end_date}`}</div></li>
                        </ul>
                    </div>
                    <div className="project__user-list">
                        <h2>User List</h2>
                        <table className="project__user-list--table">
                            <thead>
                                <tr>
                                    <th>Name <span>&#x021F5;</span></th>
                                    <th>Department <span>&#x021F5;</span></th>
                                    <th>Role <span>&#x021F5;</span></th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.length > 0 &&
                                this.state.users.map((user, index) =>
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.department}</td>
                                        <td>{user.role}</td>
                                        <td className="project__delete" onClick={() => this.deleteUser(user.id)}>&#x02A02; Delete</td>
                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <tr><td colSpan="4">End of List</td></tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="project__footer">
                        <Link to="/" className="button button--blue">&#x003A7; Close</Link>
                    </div>
                </div>
            </div>
        </main>
      );
  }
};

const mapStateToProps = ({project }) => {
    return { 
      project : project.filteredPage,
      proPage: project.projectPage
    };
  }

export default connect(mapStateToProps, actions)(Project);
