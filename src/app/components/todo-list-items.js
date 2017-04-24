import React from 'react';


export default class TodoListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        }
    }


    renderActionsSections() {
        console.log(this.state.isEditing);
        if (this.state.isEditing) {
            return (
                <td>
                    <button>Save</button>
                    <button onClick={this.OnCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
                <button onClick={this.OnEditClick.bind(this)}>Edit</button>
                <button>Delete</button>
            </td>
        );
    }


    render() {
        return (

            <tr>
                <td>{this.props.task}</td>
                {this.renderActionsSections()}
            </tr>

        );
    }

    OnEditClick() {
        this.setState({ isEditing: true });
    }

    OnCancelClick() {
        this.setState({ isEditing: false });
    }
};