
function Sirawit({ props }){
    return <>
        <h1>This is Sirawit</h1>
        <h4>Description hello!</h4>
        {{$if: n + 1 === 2}}
        <ul>
            { [1,2,3,4].map(e => <ul>{e}</ul>) }
        </ul>
    </>;
}

export default function App(){
    let show = false;

    let NULL = <Fragment $if={10}>
        <b>Hello World</b>
    </Fragment>;
    
    let IfDirective = <b id="64" class={85} $if={!show}>Sirawit</b>;
    let ForDirective1 = <b $for={ n in Object.keys(hello)}>{n}</b>
    let ForDirective2 = <b $for={(n,idx) in 100}>{n}</b>

    let ModelDirective = <input onClick="hello" dangerouslySetInnerHTML={{__html: "Hello"}}></input>

    return <b>Hello {hello} <Sirawit hello={n}/></b>;
}