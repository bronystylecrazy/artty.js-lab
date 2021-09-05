import { observe } from '@artty/reactive';

export default function Hello({ attrs }){
    let hello = "Sirawit Pratoomsuwan";
    return <div>
        {hello}
        <b $for={c in hello.split('')}>{c}</b>
    </div>;
}