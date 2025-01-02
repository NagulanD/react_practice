// import { Component } from "react" 
// import './App.css'
// import Slambook from "./Slam_book.jsx"

// class App extends Component{

//   render(){
//     return(
//       <> 
//          <Slambook></Slambook>
//       </>
//     )
//   }
// }

// export default App

// 
// import Cat from './Cat'
// function App() { 

//   return (
//     <>
        
//        <Cat/>
       
//     </>
//   )
// }

//export default App;
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import './Table.css';
// function App() {
//   return (
//     <Router>
//       <table className="layout-table">
//         <thead>
//           <tr>
//             <td className="logo-cell"><Link to="/home">O ABC</Link></td>
//             <td colSpan="3" className="nav-cell">
//               <nav>
//                 <ul className="nav-links">
//                   <li><Link to="/home">HOME</Link></li>
//                   <li><Link to="/about">About</Link></li>
//                   <li><Link to="/contact">Contact</Link></li>
//                 </ul>
//               </nav>
//             </td>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td colSpan="4" className="content-cell">
//               <Routes>
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//               </Routes>
//             </td>
//           </tr>
//         </tbody>
//         <tfoot>
//           <tr>
//             <td colSpan="4" className="footer-cell">copyright</td>
//           </tr>
//         </tfoot>
//       </table>
//     </Router>
//   );
// }

// export default App;

// import { Component } from "react" 
// import './App.css'
// import Orderedlist from "./Orederedlist"
// import Unorderedlist from "./Unorderedlist"

// class App extends Component{

//   render(){
//     return(
//       <> 
//         <Orderedlist />
//         <Unorderedlist />
//       </>
//     )
//   }
// }

// export default App
// import { Component } from "react" 
// import './App.css'
// import Task1 from './Task1'

// class App extends Component{

//   render(){
//     return(
//       <> 
//         <Task1 />
//       </>
//     )
//   }
// }

//export default App
// import { Component } from "react" 
// import './App.css'
// import Task2 from './Task2'

// class App extends Component{

//   render(){
//     return(
//       <> 
//         <Task2 />
//       </>
//     )
//   }
// }

// export default App

// import React from 'react'
// import Hen from './Hen'
// const App = () =>{
//   return (
//     <div>
//       <Hen name="heat"/>
//     </div>
//   )
// }
// export default App

import React, { createContext, useState } from "react"

import Hen from "./Hen";
export let nameContext=createContext();
function App(){

    let [colour,setColour]=useState("black");
    let [bg,setBg]=useState("white")

    function name(){
      setColour(colour==="black"? "white": "black")
      setBg(bg==="white"? "Black" : "white")
    }
    
    return(
      <>
      <nameContext.Provider value={{colour,bg}}>
        <Hen></Hen> 
        <button onClick={name}>Click</button> 
      </nameContext.Provider>
      </>
    )
}
export default App;