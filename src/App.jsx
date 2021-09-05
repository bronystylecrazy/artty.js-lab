import Hello from './components/Hello';

export default function App({ attrs }){
    var x = 0;
    var increase = () => {
        x = x + 1;
    }

    return <div>
        <h1> Id: {attrs.id}</h1>
        <h1 style="color: red" onClick={ increase }>Welcome to Artty.js!</h1>
        <Hello say="Sirawit"/>
    </div>;
}