
export const CREATE_USER = 'CREATE_USER';


export const submitUserForm = values => async dispatch => { 
    dispatch({
      type: CREATE_USER,
      userData: {
        name: values.name,
        project_id: values.pid,
        department: values.dept,
        role: values.role
      }
    });
};
