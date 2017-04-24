import React from 'react';


export default class TodosListHeader extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="TAREA" ref="createInput"/>
                <button>Create</button>
            </form>
        );
    }

    handleCreate(event){
        event.preventDefault();

        this.props.createTask(this.refs.createInput.value);
    }
};