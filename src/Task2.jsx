
import React, { useEffect , useState} from 'react'
import img from "./react.jpg"
const  Task2 = () => {

  const[count, setCount] = useState("");

//  useEffect(() => {
//         console.log("value added")

//         return (() => {
//             console.log("Code cleanup")
//         })
//   },[count])

//   useEffect(() => {
//     setTimeout(() => {
//         setCount((count) => count+1)
//     },1000)
//   })

function handleEffect(e) {
  setCount(e.target.value);
}

useEffect(() => {
   console.log(count)
},[count])
  return (
    <>
        {/* <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div> */}
        {/* <h1>I have rendered {count} times!</h1> */}
          <label >name:</label>
        <input type="text" value={count} onChange={handleEffect}/>
        <p>
            {count && (
              <img src={img} alt="#" />
            )}
        </p>

    </>
  )
}

export default  Task2