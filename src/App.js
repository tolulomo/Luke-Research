import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Welcome, Header, Project, CreateProject, AddUser } from './components';

class App extends Component {
  render() {
    return (
      <div className="main">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/add_user/:id" component={AddUser} />
            <Route exact path="/new" component={CreateProject} />
            <Route exact path="/project/:id" component={Project} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
