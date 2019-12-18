export const DELETE_USER = 'DELETE_USER';

export const CREATE_PROJECT = 'CREATE_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const DEACTIVATE = 'DEACTIVATE';

export const deleteProject = projectId => {
    return { type: DELETE_PROJECT, pid: projectId };
};

export const deleteUser = userId => async dispatch => { 
  dispatch({ type: DELETE_USER, uid: userId });
};

export const createProject = ({name, sponsor, sdate, edate}) => dispatch => { 
  dispatch({
    type: CREATE_PROJECT,
    projectData: {
      name,
      sponsor,
      sdate,
      edate,
    }
  });
};

export const fetchProject = pid => async dispatch => { 
  dispatch({ type: FETCH_PROJECT, pid });
};

export const deactivateProj = pid => async dispatch => { 
  dispatch({ type: DEACTIVATE, pid });
};
