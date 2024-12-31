import React, { useEffect , useState} from 'react'
const Effect = () => {

  const[count, setCount] = useState(0);

 useEffect(() => {
        console.log("value added")
  },[count])

//   useEffect(() => {
//     setTimeout(() => {
//         setCount((count) => count+1)
//     },1000)
//   })
  return (
    <>
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
        {/* <h1>I have rendered {count} times!</h1> */}
    </>
  )
}

export default Effect
