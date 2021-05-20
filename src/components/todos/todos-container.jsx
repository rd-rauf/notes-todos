import React, { Component } from 'react';
import TodosList from './todos-list';

import { getTodos } from "../../services/todos.service";

class TodosContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { list: [] }
    }

    async componentDidMount() {
        const response = await getTodos();
        this.setState({ list: response.data });
    }

    render() {
        const { list } = this.state;
        if (list.length == 0) {
            return <h2>Loading...</h2>
        }
        return (
            <div className="todos-container">
                {
                    (list && list.length)
                    ? (
                        <TodosList list={list} />
                      ) 
                    : null
                }
            </div>
        );
    }
}

export default TodosContainer;