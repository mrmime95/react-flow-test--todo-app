 /* @flow */

import React, { Component } from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';


type SingleTodo = {
    id:number,
    title:string,
    description:string
};

type TypeOfHanfleSubmit = {
    title: string,
    description: string,
}

type Props = {
    todoList: Array<SingleTodo>,
    handleSubmit(obj: TypeOfHanfleSubmit): void,
};

class TodoList  extends Component<Props, null> {
    render() {
        let mappedTodos = this.props.todoList.map((todo) => {
            return (
                <div key={todo.id}>
                    <Todo  todoInfo={todo}/>
                    <hr/> 
                </div>
            );
        });

        return (
            <div>
                {mappedTodos}
                <TodoInput handleSubmit={this.props.handleSubmit}/>
            </div>
        );
    }
}

export default TodoList; 