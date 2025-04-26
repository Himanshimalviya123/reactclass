import { useState,useContext } from "react";
import Cybrom from "./cybrom";
import { createContext } from "react";
const myContext=createContext();

const App=()=>{
    const [name,setName]=useState("sanju")
    return(
        <>
        <h1>welcome!!!</h1>
    <myContext.Provider value={{name,setName}}>
    <Cybrom/>
    </myContext.Provider>
        </>
    )
}
export default App;
export {myContext};
// // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\()\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// import Cybrom from "./cybrom";
// const App=()=>{
      
//         return(
//             <>
//     <h1>welcome</h1>
//     <Cybrom>
//        <p> we learn mern stack</p>
//         </Cybrom>       
//      </>
//         )
//     }
//     export default App;
// // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  \\
// import Cybrom from "./cybrom";
// const App=()=>{
      
//       return(
//            <>
//   <h1>welcome</h1>
    
//       <Cybrom/>       
//    </>
//       )
//   }
//   export default App;
// /////////////////////////////////(context api)/////////////////////////////////////////////////////////

// import Authapp from "./authapp";
// import Unauthapp from "./unauthapp";
// import { useContext } from "react";
// import { myContext } from "./logincontext";
// const App=()=>{
//     const{user}=useContext(myContext);
//            return(
//              <>
//      <h1>login system!!!</h1>
//       {user.auth? <Authapp/> :<Unauthapp/>}
        
     
//       </>
//            )
//       }
//     export default App;



// // \\\\\\\\\\\\\\\\\\\\\\\\\\\\( useref hook)\\\\\\\\\\\\\\\\\\\
// import { useRef } from "react";
// const App=()=>{
//       const myRef=useRef();
// const myDisplay=()=>{
//     myRef.current.style.border="3px solid red";
//     myRef.current.style.width="200px";

//     myRef.current.style.padding="30px";

//     myRef.current.style.backgroundColor="yellow";

// }
//         return(
//             <>
//             <h1>welcome!!!</h1>
//         <button onClick={myDisplay}> click me</button>
//         <div ref={myRef}>
// we are developer
//         </div>
//             </>
//         )
//     }
//     export default App;

// \\\\\\\\\\\\\\\\\\\\\\\( useref hook)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// import { useRef } from "react";
// const App=()=>{
//       const myRef=useRef("");
// const myDisplay=()=>{
//     myRef.current.innerHTML="we learn useref hook in react ";  
// }
//         return(
//             <>
//             <h1 ref={myRef}>welcome!!!</h1>
//         <button onClick={myDisplay}> click me</button>
       
//             </>
//         )
//     }
//     export default App;
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// import { useEffect } from "react";
// import { useRef,useState } from "react";
// const App=()=>{
//     const [name,setName]=useState("")
//       const myRef=useRef(0);
//       useEffect(()=>{
//         myRef.current+=1;
//       })
//         return(
//             <>
//            enter name:<input type="text" value={name} 
//            onChange={(e)=>{setName(e.target.value)}}/>
//        <h1>rendering count:{myRef.current}</h1>
//             </>
//         )
//     }
//     export default App;
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\task\\\\\\\\\\\\\\\\\\\\\\\
//  import { useRef } from "react";
// const App=()=>{
//       const myRef=useRef();
// const myDisplay=()=>{
//     myRef.current.style.backgroundColor="yellow";
//     myRef.current.style.width="300px";
//     myRef.current.style.padding="30px";
//     myRef.current.style.borderRadius="20px";
    
    
    
// }
// const myDispla=()=>{
//     myRef.current.innerHTML="welcomen to cybrom ";
//     myRef.current.style.backgroundColor="yellow";
//     myRef.current.style.width="300px";
//     myRef.current.style.padding="30px";
    
// }

// const myDispl=()=>{
//     myRef.current.style.border="3px solid red";
//     myRef.current.style.backgroundColor="yellow";
//     myRef.current.style.width="300px";
//     myRef.current.style.padding="30px";
//     myRef.current.style.borderRadius="50px";
    
// }
    //     return(
    //         <>
    //         <div  ref={myRef}>
    //          <h1 >welcome!!!</h1> 
    //         </div>
    //     <button onClick={myDisplay}>first</button>
    //     <button onClick={myDispla}>second</button>
    //     <button onClick={myDispl}>third</button>
       
    //         </>
    //     )
    // }
    // export default App;