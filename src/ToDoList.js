import React from 'react';
import './App.css';
import ToDo from './ToDo';

class ToDoList extends React.Component {
  state = {
    toDoList: ['Wash Dishes', 'Clean Laundry', 'Sweep Floor'],
    completedList: ['Shower']
  };

  updateToDo = (e) => {
    e.preventDefault();
    const toDoBar = document.querySelector('.to-do-bar');
    this.setState(currentState => ({
      toDoList: [toDoBar.value, ...currentState.toDoList ],
      completedList: [...currentState.completedList]
    }))
  };

  updateStatus(e) {
    e.preventDefault();
    //start here
      this.setState(currentState => ({
        contacts: currentState.contacts.filter((c) => {
          return c.id !== e.id
        })
      }))
    }

  
  render = () => {
    return (
      <form onSubmit={this.updateToDo}>
        <input className='to-do-bar' type='text' placeholder='Write a Todo'></input>
        <button>Submit</button>
        
        <div className='flex'>
        <div className='left-side'>
            <div className='to-do-list'>Incomplete</div>
            {this.state.toDoList.map(objective => {
              return (
                <>
                  <div>{objective}</div>
                  <button onClick={this.updateStatus}>Done</button>
                </>
              )
            })}
          </div>
          <div className='right-side'>
            <div className='incomplete'>Complete</div>
            {this.state.completedList.map(objective => {
              return (
                <div>{objective}</div>
              )
            })}
          </div>
        </div>      
      </form>
    )
  }
}

export default ToDoList;
