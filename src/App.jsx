export default function App(){
    
    let IfDirective = <b id="64" class={85} $if={!show}>Sirawit</b>;
    let ForDirective1 = <b $for={ n in Object.keys(hello)}>{n}</b>
    let ForDirective2 = <b $for={(n,idx) in 100}>{n}</b>

    return <>
        <h1>Welcome to Artty.js</h1>
        <IfDirective/>
        <ForDirective1/>
        <ForDirective2/>
        <ul $if={show}>
            <li $for={ n in Object.keys(hello)}> This li number #{n}</li>
        </ul>
    </>;
}