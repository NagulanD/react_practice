import { useState } from "react";
function Cat() {
    let [count, setcount] = useState(0);
    let [name, setName] = useState("ajay");
    return (
        <div>
            <button onClick={()=>setcount(count+1)}>++</button>
            <h1>count:{count}</h1>
            <button onClick={()=>setcount(count-1)}>--</button>
            <h1>name:{name}</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
       </div>
    )
}
export default Cat;