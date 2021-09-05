import Hello from './components/Hello';
import { useState } from '@artty/hooks';
import options from '../artty/old/options';

export default function App(){
    var [message, setMessage] = useState("Art Sirawit");
    var [show,setShow] = useState(true);
    var [todos, setTodos] = useState(["Hiii!"]);

    var save = function(){
        if(message.trim() === "") return false;
        setTodos([...todos, message]);
        setMessage("");
    }

    return <div class="hello">
       <h1>Artty.js</h1>
       <h4 style={`color: ${message}`}>
        Hello, {message}
       </h4>

        <b>Todo list ({ todos.length }): <input type="checkbox" checked={show}  onInput={() => setShow(!show)}/></b><br/>
        <ul $if={show}>
            <li $for={n in todos} style={`color: ${n}`}>{n}</li>
        </ul><br/>

       <input type="text" value={message} onKeyDown={($event) => {
           if($event.which === 13) save()
       }} onInput={$e => setMessage($e.target.value)} />
       <button onClick={save}>Add</button><button onClick={() => setTodos([])}>clear</button>

    </div>;
}