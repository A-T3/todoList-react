import React from 'react';
import TaskItem from './TaskItem';

const TaskList = props => {
  const renderList = () => {
    return props.tasks.map((task, index) => {
      return (
        <TaskItem
          key={index}
          task={task}
          deleteTask={dtask => {
            props.deleteTask(dtask);
          }}
        />
      );
    });
  };

  return (
    <div>
      <h3>Task List</h3>
      <div>{renderList()}</div>
    </div>
  );
};

export default TaskList;
