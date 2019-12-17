import React from 'react';
import { Link } from 'react-router-dom';


const CreateProject = () => {
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
                    <form action="#" className="form">
                        <div class="form__group">
                            <input type="text" class="form__input" placeholder="Project Name" id="name" required />
                            <label for="name" class="form__label">Project Name</label>
                        </div>
                        <div class="form__group">
                            <input type="text" class="form__input" placeholder="Project Sponsor" id="sponsor" required />
                            <label for="sponsor" class="form__label">Project Sponsor</label>
                        </div>
                    <div className="row row--gutter">
                        <div className="column-2-of-4 u__to-top">
                            <div class="form__group">
                                <input type="date" class="form__input" placeholder="Start Date" id="sd" required />
                                <label for="sd" class="form__label">Start Date</label>
                            </div>
                        </div>
                        <div className="column-2-of-4">
                            <div class="form__group">
                                <input type="date" class="form__input" placeholder="End Date" id="ed" required />
                                <label for="ed" class="form__label">End Date</label>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="project__footer">
                    <ul>
                        <li><Link to="/" className="button button--blue button--submit">&#x0002B; Submit</Link></li>
                        <li><Link to="/" className="button button--blue">&#x003A7; Cancel</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
  );
};

export default CreateProject;
