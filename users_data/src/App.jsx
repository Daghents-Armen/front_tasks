import { useState } from "react";
import Users from "./components/Users";

export default function App(){
  const [all, setAll] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  return <div>
        <button onClick = {() => setAll(!all)} style = {{margin: 10, background: 'red'}}> All </button>
        <button onClick = {() => setMale(!male)} style = {{margin: 10, background: 'blue'}}> Male </button>
        <button onClick = {() => setFemale(!female)} style = {{margin: 10, background: 'pink'}}> Female </button>

         {
          all && <Users
          onAll = {all}
          />
        }

        {
          male && <Users
          onMale = {male}
          />
        }

        {
          female && <Users
          onFemale = {female}
          />
        }

  </div>
}