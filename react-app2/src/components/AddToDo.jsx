import { useState } from "react"

export default function AddToDo({arr, onToDo}){
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    
    function handle_click(event){
        event.preventDefault();
        if(!text.trim()){
            setError('fill all the fields');
            return;
        }
        setError('');
        onToDo(text);
        setText('')
    }

    

    return <div>
        <h3> AddToDo </h3>
        {error && <p style={{color: 'red'}}> {error} </p>}
        <form onSubmit = {handle_click}>
            <input 
                value = {text}
                onChange = {e => setText(e.target.value)}
            />
            <button onSubmit = {handle_click}> Add </button>
        </form>
    </div>
}