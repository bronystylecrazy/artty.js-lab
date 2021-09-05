import Hello from './components/Hello';
import { useState } from '@artty/hooks';
import options from '../artty/old/options';

export default function App(){
    var [message, setMessage] = useState("HEllo");
    var [count, setCount] = useState(0);
    var increase = function(){
        // setMessage("ISASASS");
        setCount(count => count + 1);
    }

    return <div class="hello">
        {/* <input type="text" onInput={(e) => message.value = e.target.value} /> */}
        <h1> Id: {message} {count}</h1>
        <h1 style="color: red" onClick={ ($event) => increase.call($event) }>Welcome to Artty.js!</h1>
        <Hello say="Sirawit"/>
    </div>;
}