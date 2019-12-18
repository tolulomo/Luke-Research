import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../../store/actions/project';
import FloatingBtn from '../utility/FloatingBtn';
import Paginator from '../utility/generalFunctions';


class Dashboard extends Component {
  state = { paging : null }

  componentDidMount(){
    this.cardFns();
  }

  cardFns = (x) => {
    let show
    const { projects } = this.props;
    if(!x){
      show = Paginator(projects, 1,2);
      this.setState({ paging: show}, () => {
        return show.data.map(el => this.aCard(el))
      })
    }
    if(x=='prev'){
      show = Paginator(projects, this.state.paging.page - 1, 2)
      this.setState({ paging: show}, () => {
        return show.data.map(el => this.aCard(el))
      })
    }
    if(x=='next'){
      if(this.state.paging.next_page == null){
        return;
      }
      show = Paginator(projects, this.state.paging.page + 1, 2)
      this.setState({ paging: show}, () => {
        return show.data.map(el => this.aCard(el))
      })
    }
  }


  aCard = (elm) => {
    return (
      <div className="column-2-of-4" key={elm.id}>
        <div className="dashboard__card">
          <div className={`dashboard__card--status u-${elm.active}`}>{`Active: ${elm.active}`}</div>
          <div className="dashboard__card__side dashboard__card__side--front">
            <div className="dashboard__card-picture">
                
            </div>
            <h4 className="dashboard__card__heading">
              <span className="dashboard__card__heading-span">{`Project: ${elm.name}`}</span>
            </h4>
            <div className="dashboard__card--details">
                <ul>
                    <li>{`Sponsor: ${elm.sponsor}`}</li>
                    <li>{`Start Date: ${elm.project_start_date}`}</li>
                    <li>{`Start Date: ${elm.project_end_date}`}</li>
                </ul>
            </div>
          </div>
          <div className="dashboard__card__side dashboard__card__side--back dashboard__card__side--back">
            <div className="dashboard__card--back">
              <div className="dashboard__card--back-box">
                  <p className="dashboard__card--visit">View</p>
                  <p className="dashboard__card--page">Project Page</p>
                  <Link to={`/project/${elm.id}`} className="dashboard__card--visit-link">Select</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  render() {
    if(!this.state.paging) {
      return <div>Loading...</div>
    }
    return (
      <main className="dashboard">
        <div className="dashboard--welcome-text">
          <h2>You're Welcome...</h2>
        </div>
        <div className="dashboard__project-container">
          <div className="wrapper wrapper--narrow">
            <div className="row row--gutter">
              {this.state.paging.data.map(el => this.aCard(el))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="wrapper">
            <div className="column-1-of-3"><div className="dashboard--status-message dashboard--float-right u__af"><button onClick={() => this.cardFns('prev')}>{`<< Previous`}</button></div></div>
            <div className="column-1-of-3"><div className="dashboard--status-message">{`Currently showing 2 of ${this.props.projects.length} projects`}</div></div>
            <div className="column-1-of-3"><div className="dashboard--status-message dashboard--float-left u__af"><button onClick={() => this.cardFns('next')}>{`Next >>`}</button></div></div>
          </div>
        </div>
        <FloatingBtn link1 = "/new" />
      </main>
    );
  }
};

const mapStateToProps = ({users, project }) => {
  return { 
    users,
    projects : project.projects,
    currentView: project.currentView,
    availableProjects: project.availableProjects
  };
}

export default connect(mapStateToProps, actions)(Dashboard);
