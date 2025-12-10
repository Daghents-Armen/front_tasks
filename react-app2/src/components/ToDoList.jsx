import { useState } from "react"
import AddToDo from './AddToDo'
import List from './List'

export default function ToDoList(){
    const [todos, setTodos] = useState([
        {id: 100, text: 'go to the gym', completed: false},
        {id: 101, text: 'read a book', completed: false},
        {id: 102, text: 'eat a burger', completed: true}
    ])

    function remove_elem(id){
        setTodos(
            todos => todos.filter(item => item.id !== id)
        )
    }


    function change_state(id, completed){
        setTodos(
                todos => todos.map(item => {
                if(item.id === id){
                   return {...item, completed: !completed}
                } 
                 else {
                    return item;
                }
            })
        )
    }

    function add_todo(text){
        const another_todo = {
            id: Date.now(),
            text,
            completed: false
        };
        setTodos(todos => ([...todos, another_todo]));
    }
    return <div>
        <AddToDo
        onToDo = {add_todo}
        />
        <List 
        items = {todos}
        onChange = {change_state}
        onRemove = {remove_elem}
        />
    </div>
}