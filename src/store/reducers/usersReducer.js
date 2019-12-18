import _ from 'lodash';
import uniqid from 'uniqid';

import { USERS } from '../../data';
import { UserLogics } from '../../models';
import { DELETE_USER } from '../actions/project';
import { CREATE_USER } from '../actions/users';

const initialState = {
    users: _.map(USERS, (value) => value)
}

export default (state = initialState, action) => {
    switch (action.type) {
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
            users: state.users.concat(newUser)
        };
    case DELETE_USER:
        return {
            ...state,
            users: state.users.filter(
                user => user.id !== action.uid
            ),
        }

    default:
        return state
    }
};