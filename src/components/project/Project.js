import React from 'react';
import { Link } from 'react-router-dom';


const Project = () => {
  return (
    <main className="wrapper">
        <div className="u__stage">
            <div className="project">
                <div className="project--side-pane"></div>
                <div className="project--indicator"></div>
                <div className="row row--gutter">
                    <div className="column-2-of-4">
                        <div className="project__details">
                            <h2>Project SLN</h2>
                            <div className="project__details--status u-active"><span> </span> Active</div>
                        </div>
                    </div>
                    <div className="column-2-of-4">
                        <ul>
                            <li><Link to="/project" className="button button--blue">De-Activate Project</Link></li>
                            <li><Link to="/project/add_user" className="button button--blue">+ &nbsp; Add User</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="project__chip">
                    <ul>
                        <li><div className="project__chip-list">Project Sponsor: NIEHS</div></li>
                        <li><div className="project__chip-list">Start Date: 10/1/2007</div></li>
                        <li><div className="project__chip-list">End Date: 10/1/2007</div></li>
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
                            <tr>
                                <td>any</td>
                                <td>any</td>
                                <td>any</td>
                                <td>&#x02A02; Delete</td>
                            </tr>
                            <tr>
                                <td>any</td>
                                <td>any</td>
                                <td>any</td>
                                <td>&#x02A02; Delete</td>
                            </tr>
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
};

export default Project;
