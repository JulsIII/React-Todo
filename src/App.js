import React from 'react';
import TotoList from './components/TodoList';
import TotoForm from './components/TodoForm';
import './styles.css';

const tasks = [
  {
    name: 'TaskA',
    id: 123,
    completed: false
  },
  {
    name: 'TaskB',
    id: 124,
    completed: false
  },
  {
    name: 'TaskC',
    id: 125,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      tasks: tasks
    }
  }



  handleItemToggle = (itemId)=> {

    this.setState({
      tasks: this.state.tasks.map(item=>{
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return(item);
      })

    });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Todo:</h2>
          <TotoForm />
        </div>
        <TotoList tasks={this.state.tasks} handleItemToggle={this.handleItemToggle}/>
      </div>
    );
  }
}

export default App;
