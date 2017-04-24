import _ from 'lodash';
import React from 'react';
import TodoListHeader from './todo-list-header';
import TodoListItem from './todo-list-items'


export default class TodosList extends React.Component {

    renderItems (){
        return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} />);
    }

function (todo, index) {

}


    render() {
        return (
            <table>
                <TodoListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>

        );
    }
};