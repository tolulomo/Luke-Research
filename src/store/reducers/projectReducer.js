import _ from 'lodash';
import uniqid from 'uniqid';

import { PROJECTS, USERS } from '../../data';
import ProjectLogics from '../../models/ProjectLogic';
import UserLogics from '../../models/UserLogic';
import { CREATE_USER } from '../actions/users';
import { CREATE_PROJECT, DELETE_PROJECT, FETCH_PROJECT, DEACTIVATE, DELETE_USER } from '../actions/project';

const initialState = {
    projects: _.map(PROJECTS, (value) => value),
    availableProjects: _.chain(PROJECTS).map(value => value).chunk(2).value(),
    currentView: 0,
    projectPage: null,
    filteredPage: null,
    user: _.map(USERS, (value) => value)
}

export default (state = initialState, action) => {
    switch (action.type) {
      case CREATE_PROJECT:
            const newProject = new ProjectLogics(
            uniqid(),
            'false',
            action.projectData.name,
            action.projectData.sponsor,
            action.projectData.sdate,
            action.projectData.edate
        );
        return {
            ...state,
            projects: state.projects.concat(newProject),
            availableProjects: _.chain(state.projects).map(value => value).chunk(2).value(),
        };
    case DELETE_PROJECT:
        return {
            ...state,
            projects: state.projects.filter(
                project => project.id !== action.pid
            ),
            availableProjects: _.chunk(state.projects,2)
        }
    case FETCH_PROJECT:
        return {
            ...state,
            projectPage: _.chain(state.user).map(value => value)
            .filter(el => el.project_id == action.pid).value(),
            filteredPage: _.chain(PROJECTS).map(value => value)
            .filter(el => el.id == action.pid).value(),
        }
    case DEACTIVATE:
        state.filteredPage[0].active = !state.filteredPage[0].active;
        return {
            ...state,
            filteredPage: state.filteredPage
        }

    case CREATE_USER:
        const newUser = new UserLogics(
            uniqid(),
            action.userData.name,
            action.userData.project_id,
            action.userData.department,
            action.userData.role
        );
        return {
            ...state,
            user: state.user.concat(newUser)
        };

    case DELETE_USER:
        return {
            ...state,
            user: state.user.filter(
                user => user.id !== action.uid
            ),
        }
    default:
        return state;
    }
};

