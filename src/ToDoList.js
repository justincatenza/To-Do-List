import React from 'react';
import './App.css';

class ToDoList extends React.Component {
  state = {
    name: '',
    toDoList: [],
  };

  updateToDo = (e) => {
    e.preventDefault();
    const toDoBar = document.querySelector('.to-do-bar');
    this.setState(currentState => ({
      name: '',
      toDoList: [toDoBar.value, ...currentState.toDoList ],
    }))
  };

  updateName(e) {
    e.preventDefault();
    let target = e.target.value;
    this.setState(currentState => ({
      name: target,
      toDoList: [...currentState.toDoList]
    }))
  };

  updateStatus(e) {
    e.preventDefault();
    let target = e.target.textContent;
    this.setState(currentState => ({
      name: '',
      toDoList: currentState.toDoList.filter(toDo => {
        return toDo !== target
      })
    }))
  }
  
  render = () => {
    return (
      <form onSubmit={this.updateToDo}>
        <input value={this.state.name} onChange={(event) => {this.updateName(event)}} className='to-do-bar' type='text' placeholder='Write a Todo'></input>
        <button>Submit</button>
        <div className='left-side'>
            <div className='to-do-list'>To-Do List</div>
            { this.state.toDoList.map(objective => {
              return (
                <>
                  <div className='to-do' onClick={(e) => {this.updateStatus(e)}}>{objective}</div>
                </>
              )
            })}
          </div>
      </form>
    )
  }
}

export default ToDoList;
