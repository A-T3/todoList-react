import { ADD_TASK, DELETE_TASK } from './actionTypes';

let nextId = 0;
export const addTask = task => ({
  type: ADD_TASK,
  payload: {
    id: nextId++,
    ...task
  }
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: { id }
});
