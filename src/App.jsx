import Hello from './components/Hello';
import $ from '@artty/hooks';

export default function App(){
    var [message, setMessage] = $.useState("HEllo");
    
    var increase = function(){
        setMessage("ISASASS");
    }

    return <div class="hello">
        {/* <input type="text" onInput={(e) => message.value = e.target.value} /> */}
        <h1> Id: {message}</h1>
        <h1 style="color: red" onClick={ ($event) => increase.call($event) }>Welcome to Artty.js!</h1>
        <Hello say="Sirawit"/>
    </div>;
}