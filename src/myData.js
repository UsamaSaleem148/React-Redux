// import cx from 'classnames';
import { Component } from "react"

export default class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      todoList: [],
      totalRemaining: 0,
      inputVal: "",
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  handleAddTodo(event) {
    if (event.target.value) {
      this.setState({ inputVal: event.target.value })
    }
  }

  addItem() {
    if (this.state.inputVal) {
      const list = [...this.state.todoList, this.state.inputVal]
      this.setState({ todoList: list, inputVal: "", totalRemaining: ++this.state.totalRemaining })
    }
  }

  strikeThroughElement(id) {
    if (document.getElementById(id).classList.contains("is-done")) {
      this.setState({ totalRemaining: ++this.state.totalRemaining })
      document.getElementById(id).classList.remove("is-done")
    } else {
      this.setState({ totalRemaining: --this.state.totalRemaining })
      document.getElementById(id).classList.add("is-done")
    }
  }
  render() {
    return (
      <>
        <div>
          <h2>Todo List</h2>
          <input name="TodoItem" value={this.state.inputVal} type="text" onChange={this.handleAddTodo} />
          <button onClick={this.addItem}>Add</button>

          <p className="task-counter">
            {this.state.totalRemaining} remaining out of {this.state.todoList.length} tasks
          </p>

          <ul>
            {this.state.todoList.length > 0
              ? this.state.todoList.map((todo, key) => {
                  return (
                    <li
                      onClick={() => {
                        this.strikeThroughElement(`todo_${key}`)
                      }}
                      id={`todo_${key}`}
                    >
                      {todo}
                    </li>
                  )
                })
              : null}
          </ul>
        </div>
        <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
      </>
    )
  }
}
