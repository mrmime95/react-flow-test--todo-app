/* @flow */
import React, { Component } from 'react';

type TypeOfHanfleSubmit = {
    title: string,
    description: string,
}

type Props = {
    handleSubmit(obj: TypeOfHanfleSubmit): void,
};

type State = {
    title: string,
    description: string,
};

class TodoInput extends Component<Props, State> {
    handleTitleUpdate = (e: SyntheticInputEvent<HTMLInputElement>) =>{
        this.setState({
            title: e.currentTarget.value,
        });
    }
    handleDescUpdate = (e: SyntheticInputEvent<HTMLInputElement>) =>{
        this.setState({
            description: e.currentTarget.value,
        });
    }
    handleObjAssign = () =>{
        let newObj = {

            title: this.state.title,
            description: this.state.description
        };
        this.props.handleSubmit(newObj);
    }
    state = {
        title: "",
        description: "",
    }
    render() {
        return (
            <div>
                <label>Title</label>
                <input onChange={this.handleTitleUpdate} type="text"/>
                <br/>
                <label>Description</label>
                <input onChange={this.handleDescUpdate} type="text"/>
                <br/> 
                <button onClick={() => this.handleObjAssign()}>
                    Submit
                </button>
            </div>
        );
    }
}

export default TodoInput;