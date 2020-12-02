import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      selectedTask: '',
      disableRemove: true,
    };

    this.addTodo = this.addTodo.bind(this);
    this.setTaskSelected = this.setTaskSelected.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  setTaskSelected(task) {
    this.setState({ selectedTask: task, disableRemove: false });
  }

  removeTask() {
    const { selectedTask } = this.state;
    this.setState((state) => ({
      listTodo: [...state.listTodo].filter((item) => item !== selectedTask),
      selectedTask: '',
      disableRemove: true,
    }));
  }

  render() {
    const { listTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        <input
          type="button"
          data-testid="id-remove"
          disabled={this.state.disableRemove}
          value="Remover"
          onClick={this.removeTask}
        />
        {listTodo && (
          <ul>
            {listTodo.map((todo, index) => (
              <li onClick={() => this.setTaskSelected(todo)} key={index + 1}>
                <Item content={todo} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default App;
