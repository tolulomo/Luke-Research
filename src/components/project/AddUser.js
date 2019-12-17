import React from 'react';
import { Link } from 'react-router-dom';


const AddUser= () => {
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
                    <form action="#" className="form">
                        <div className="form__group">
                            <input type="text" className="form__input" placeholder="Name" id="name" required />
                            <label for="name" className="form__label">Name</label>
                        </div>
                        <div className="form__group">
                            <input type="text" className="form__input" placeholder="Department" id="deptr" required />
                            <label for="dept" className="form__label">Project Sponsor</label>
                        </div>
                    <div className="project__form--role">
                       <h2>Role:</h2>
                       <ul class="form__group">
                           <li>
                                <div class="form__radio-group">
                                    <input type="radio" class="form__radio-input" id="pi" name="size" />
                                    <label for="pi" class="form__radio-label">
                                        <span class="form__radio-button"></span>
                                        PI
                                    </label>
                                </div>
                           </li>
                           <li>
                                <div class="form__radio-group">
                                    <input type="radio" class="form__radio-input" id="KeyPersonnel" name="size" />
                                    <label for="KeyPersonnel" class="form__radio-label">
                                        <span class="form__radio-button"></span>
                                        Key Personnel
                                    </label>
                                </div>
                           </li>
                           <li>
                                <div class="form__radio-group">
                                    <input type="radio" class="form__radio-input" id="GrantAdministrator" name="size" />
                                    <label for="GrantAdministrator" class="form__radio-label">
                                        <span class="form__radio-button"></span>
                                        Grant Administrator
                                    </label>
                                </div>
                           </li>
                       </ul>
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

export default AddUser;
