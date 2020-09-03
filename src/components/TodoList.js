import React, {useState, useEffect} from "react";
import styles from '../styles/TodoList.module.css';

//
// ToDo database functions
//

function getTodoList(setValue) {
    const url = 'http://165.232.118.76:5000/todo/';

    const options = {
        method: 'GET',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json;charset=UTF-8'}
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            setValue(data);
        })
}

function createTodo(title, onHandleCreated) {
    const url = 'http://165.232.118.76:5000/todo/add/';

    const todo = {
        title: title,
        completed: false
    }
  
    const options = {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(todo)
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            onHandleCreated && onHandleCreated();
        })
}

function updateTodo(todoid, title, completed, onHandleUpdated) {
    const url = `http://165.232.118.76:5000/todo/update/${todoid}`;

    const todo = {
        title: title,
        completed: completed
    }
  
    const options = {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(todo)
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            onHandleUpdated & onHandleUpdated();
        })
}

function deleteTodo(todoid, onHandleDeleted) {
    const url = `http://165.232.118.76:5000/todo/${todoid}`;

    const options = {
        method: 'DELETE',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json;charset=UTF-8'},
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            onHandleDeleted & onHandleDeleted();
        })
}

//
// Private components
//

function TodoInput(props) {
    return (
        <form className={props.styles.todoinput} onSubmit={props.onSubmit}>
            <input id="todotitle" className={props.styles.todoinputfield} type="text" />
            <button className={props.styles.submitbutton} type="submit" name="action">
                <i className={`material-icons ${props.styles.submitbuttonicon}`}>add</i>
            </button>
        </form>
    )
}

function TodoItem(props) {
    return (
        <tr className={props.styles.row}>
            <td className={props.styles.checkmarkcol} onClick={props.onClickComplete}>{<i className={`material-icons ${styles.listbutton}`}>{props.todo.completed ? 'check_box' : 'check_box_outline_blank'}</i>}</td>
            <td className={props.styles.titlecol}>
                {props.editing ? <textarea className={props.styles.todoeditor} id={props.todo._id}>{props.todo.title}</textarea> : props.todo.title}
            </td>
            <td className={props.styles.buttoncol} onClick={props.editing ? props.onClickEditUpdate : props.onClickEdit}>
                {<i className={`material-icons ${props.styles.listbutton}`}>{props.editing ? 'done_outline' : 'edit'}</i>}
            </td>
            <td className={props.styles.buttoncol} onClick={props.onClickDelete}>{<i className={`material-icons ${props.styles.listbutton}`}>delete_forever</i>}</td>
        </tr>
    )
}

//
// TodoList component
//

export default function TodoList(props) {
    const [todoDataList, setTodoDataList] = useState([]);
    const [editingTodoID, seteditingTodoID] = useState('');

    function onSubmitTodo(event) {
        event.preventDefault();
        const title = document.getElementById('todotitle').value;
        if (title)
        {
            createTodo(title, getTodoList.bind(this, setTodoDataList));
            document.getElementById('todotitle').value = '';
        }
    }
    
    function onClickComplete(todo, event) {
        event.preventDefault();
        updateTodo(todo._id, todo.title, !todo.completed, getTodoList.bind(this, setTodoDataList));
    }
    
    function onClickDelete(todo, event) {
        event.preventDefault();
        deleteTodo(todo._id, getTodoList.bind(this, setTodoDataList));
    }
    
    function onClickEdit(todo, event) {
        event.preventDefault();
        seteditingTodoID(todo._id);
    }
    
    function onClickEditUpdate(todo, event) {
        event.preventDefault();
        seteditingTodoID('');
        const title = document.getElementById(todo._id).value;
        title && updateTodo(todo._id, title, todo.completed, getTodoList.bind(this, setTodoDataList));
    }
    
    useEffect(() => getTodoList(setTodoDataList), []);
 
    function todoTableBody() {
        return todoDataList.map(todo => {
            return <TodoItem 
                todo={todo} 
                key={todo._id} 
                styles={styles} 
                onClickComplete={onClickComplete.bind(this, todo)}
                onClickEdit={onClickEdit.bind(this, todo)}
                onClickEditUpdate={onClickEditUpdate.bind(this, todo)}
                onClickDelete={onClickDelete.bind(this, todo)}
                editing={editingTodoID === todo._id}
            />;
        })
    }

    return (
        <div className={styles.outer}>
            <TodoInput styles={styles} onSubmit={onSubmitTodo}/>
            <table className={styles.list}>
                <tbody>
                    {todoTableBody(styles)}
                </tbody>
            </table>
        </div>
    );
}
