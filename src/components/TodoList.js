import React from 'react';
import Todo from "./Todo";

const TodoList = props => {

    return (

        <div>

            {props.tasks.map(item => (
                <Todo handleItemToggle={props.handleItemToggle} key={item.id} item={item} />
            ))}
            <button>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;