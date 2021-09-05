export default function App(){
    var show = false;
    var hello = "Message!";

    let IfDirective = <b id="64" class={85} $if={!show}>Sirawit</b>;
    let ForDirective1 = <b $for={ n in Object.keys(hello)}>{n}</b>
    let ForDirective2 = <b $for={(n,idx) in 3}>{n}</b>

    let Hello =  show ? ForDirective1 : ForDirective2 ;

    return <>
        <h1>Welcome to Artty.js</h1>
        {Hello}
        <IfDirective/>
        <ForDirective1/>
        <ForDirective2/>
        <ul $if={show}>
            <li $for={ n in hello.split("HEllo")}> This li number #{n}</li>
        </ul>
    </>;
}