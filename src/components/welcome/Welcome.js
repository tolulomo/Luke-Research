import React from 'react';
import FloatingBtn from '../utility/FloatingBtn';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="dashboard--welcome-text">
        <h2>You're Welcome...</h2>
      </div>
      <div className="dashboard__project-container">
        <div className="wrapper wrapper--narrow">
          <div className="row row--gutter">
            <div className="column-2-of-4">
              <div className="dashboard__card">
                <div className="dashboard__card--status u-inactive">Inactive</div>
                <div className="dashboard__card__side dashboard__card__side--front">
                  <div className="dashboard__card-picture">
                      
                  </div>
                  <h4 className="dashboard__card__heading">
                    <span className="dashboard__card__heading-span">Project: CJN</span>
                  </h4>
                  <div className="dashboard__card--details">
                      <ul>
                          <li>Sponsor: NIEHS</li>
                          <li>Start Date: 10/1/2007</li>
                          <li>Start Date: 10/1/2007</li>
                      </ul>
                  </div>
                </div>
                <div className="dashboard__card__side dashboard__card__side--back dashboard__card__side--back">
                  <div className="dashboard__card--back">
                    <div className="dashboard__card--back-box">
                        <p className="dashboard__card--visit">View</p>
                        <p className="dashboard__card--page">Project Page</p>
                        <Link to="/project" className="dashboard__card--visit-link">Select</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-2-of-4">
              <div className="dashboard__card">
                <div className="dashboard__card--status u-active">Active</div>
                <div className="dashboard__card__side dashboard__card__side--front">
                  <div className="dashboard__card-picture">
                      
                  </div>
                  <h4 className="dashboard__card__heading">
                    <span className="dashboard__card__heading-span">Project: CJN</span>
                  </h4>
                  <div className="dashboard__card--details">
                      <ul>
                          <li>Sponsor: NIEHS</li>
                          <li>Start Date: 10/1/2007</li>
                          <li>Start Date: 10/1/2007</li>
                      </ul>
                  </div>
                </div>
                <div className="dashboard__card__side dashboard__card__side--back dashboard__card__side--back">
                    <div className="dashboard__card--back">
                        <div className="dashboard__card--back-box">
                          <p className="dashboard__card--visit">View</p>
                          <p className="dashboard__card--page">Project Page</p>
                          <Link to="/project" className="dashboard__card--visit-link">Select</Link>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="column-1-of-3"><div className="dashboard--status-message dashboard--float-right u__af">{`<< Previous`}</div></div>
          <div className="column-1-of-3"><div className="dashboard--status-message">Currently showing 2 of 3 projects</div></div>
          <div className="column-1-of-3"><div className="dashboard--status-message dashboard--float-left u__af">{`Next >>`}</div></div>
        </div>
      </div>
      <FloatingBtn />
    </main>
  );
};

export default Dashboard;
