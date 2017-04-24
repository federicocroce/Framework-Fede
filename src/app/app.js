import React from 'react';
import TodoloList from './components/todo-list';
import CreateTodo from './components/create-todo';


const todos = [
    {
        task: 'TareaA',
        isCompleted: false
    },
    {
        task: 'Tarea1',
        isCompleted: true
    }
]

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos
        }
    }

    render() {
        return (
            <div>
                <h1>React ToDos App yeaaaa 1</h1>
                <CreateTodo createTask={this.createTask.bind(this)} />
                <TodoloList
                    todos={this.state.todos}
                />
            </div>
        );
    }

    createTask(task) {
        this.state.todos.push({
            task, 
            isCompleted:false
        });
        this.setState({todos: this.state.todos});
    }
};