export default function Hello({ attrs }){
    let hello = attrs.say;
    return <div>
        {hello}
        <b $for={c in hello.split('')}>{c}</b>
    </div>;
}