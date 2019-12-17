import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Welcome, Header } from './components';

const Project = () => <div>Project</div>
const AddProject = () => <div>Add Project</div>
const AddUser = () => <div>Add User Page</div>


class App extends Component {
  render() {
    return (
      <div className="main">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/project" component={Project} />
            <Route path="/project/new" component={AddProject} />
            <Route path="/project/add_user" component={AddUser} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h3>
//           Let's create a view that displays user data grouped by the project
//           each user is working on.
//         </h3>
//         <p>
//           Start by looking at <code>src/mock_data/users.js</code> and{" "}
//           <code>src/mock_data/projects.js</code>.
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;
