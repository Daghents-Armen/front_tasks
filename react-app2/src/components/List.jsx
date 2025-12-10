import ToDoItem from './ToDoItem'

export default function List({items, onRemove, onChange}){
    return <div>
        {
            items.map(item => <ToDoItem key = {item.id}
            onRemove = {onRemove}
            onChange = {onChange}
            {...item}
            />)
        }
    </div>
}