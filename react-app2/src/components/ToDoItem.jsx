export default function ToDoItem({id, text, completed, onRemove, onChange}){
    return <div style = {{background: 'blue', padding: 20, margin: 10}}>
        <h3 style = {{textDecoration: completed ? 'line-through' : 'none'}}> {text} </h3>
        <button onClick = {() => onRemove(id)}> delete </button>
        <button onClick = {() => onChange(id, completed)}> {completed ? 'cancel' : 'complete'} </button>
    </div>
}