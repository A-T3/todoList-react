import React from 'react';
// import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import { deleteTask } from '../actions';

class TaskList extends React.Component {
  renderList() {
    return this.props.tasks.map(task => {
      return <div>{task.taskName}</div>;
    });
  }

  render() {
    console.log(this.props.tasks);
    return (
      <div>
        <h3>Task List</h3>
        <div className="row">
          <div className="col s12 m6">
            {this.renderList()}
            {/* <div className="card white">
              <div className="card-content black-text">
                <span className="card-title">{this.props.taskName}</span>
                <p>{task.description}</p>
              </div>
              <div className="card-action">
                <button
                  className="btn-floating btn-medium waves-effect waves-light transparent"
                  // onClick={() => {
                  // this.props.deleteTask(task);
                  // }}
                >
                  <i className="small material-icons teal-text">delete</i>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tasks: state.tasks };
};
export default connect(
  mapStateToProps,
  { deleteTask }
)(TaskList);

// const renderList = () => {
//   return props.tasks.map((task, index) => {
//     return (
//       <TaskItem
//         key={index}
//         task={task}
//         deleteTask={dtask => {
//           props.deleteTask(dtask);
//         }}
//       />
//     );
//   });
// };

// return (
//   <div>
//     <h3>Task List</h3>
//     <div>{renderList()}</div>
//   </div>
// );

// const TaskItem = ({ task, deleteTask }) => {
//   return (
//     <div className="row">
//       <div className="col s12 m6">
//         <div className="card white">
//           <div className="card-content black-text">
//             <span className="card-title">{task.taskName}</span>
//             <p>{task.description}</p>
//           </div>
//           <div className="card-action">
//             <button
//               className="btn-floating btn-medium waves-effect waves-light transparent"
//               onClick={() => {
//                 deleteTask(task);
//               }}
//             >
//               <i className="small material-icons teal-text">delete</i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from 'react';
// import {connect} from 'react-redux'
// import { addTask } from '../actions/index';

// const addTask = ({ dispatch }) =>{

// }
