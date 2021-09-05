import Hello from './components/Hello';
import { useState } from '@artty/hooks';

export default function App({ attrs }){
    var [message,setMessage] = useState("HfsdfdssfEllo");
    var x = 0;
    var increase = () => {
        console.log('hello!');
    }

    return <div class="hello">
        <h1> Id: {message}</h1>
        <h1 style="color: red" onClick={ increase }>Welcome to Artty.js!</h1>
        <Hello say="Sirawit"/>
    </div>;
}