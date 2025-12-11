import { useState } from "react"
import { useEffect } from "react";

export default function Users({onAll, onMale, onFemale}){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())            
            .then(json => setUsers(json))
    }, [])
    
    return <div>
       <p> {users.length} Users </p>
       {
        users.map(user => {
            if(onAll){
                return <div style={{background: 'red'}}>
                    <p> {user.name} </p>
                    <p> {user.gender} </p>
                    </div>
            } else if(onMale){
                if(user.gender === 'male'){
                return <div style = {{background: 'blue'}}>
                    <p> {user.name} </p>
                    <p> {user.gender} </p>
                    </div>
                }
            } else if(onFemale){
                if(user.gender === 'woman'){
                    return <div style = {{background: 'pink'}}>
                    <p> {user.name} </p>
                    <p> {user.gender} </p>
                    </div>
                }
            }
        })
       }
    </div>
}