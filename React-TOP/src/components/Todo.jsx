import {v4 as uuidv4} from 'uuid';

const todos = [
    { task: "Task 1", id: uuidv4()},
    { task: "Task 2", id: uuidv4()},
    { task: "Task 3", id: uuidv4()},
];

// todos.map(todo => console.log(todo.id))

function Todo () {
    return(
        <ul>
            {todos.map(todo =>{
                // {console.log(todo.id)}
                // return <li key={uuidv4()}>{todo.task}</li>
                return <li key={todo.id}>{todo.task}</li>
            })}
        </ul>
    )
}

export default Todo