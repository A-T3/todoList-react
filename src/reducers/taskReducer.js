import { ADD_TASK, DELETE_TASK } from '../actions/actionTypes';

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.payload.id,
          taskName: action.payload.taskName,
          description: action.payload.description
        }
      ];
    case DELETE_TASK:
      const newArray = parseInt(action.id);
      return state.filter(task => task.id !== newArray);
    default:
      return state;
  }
};

export default taskReducer;
