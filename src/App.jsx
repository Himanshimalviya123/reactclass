// import { useState,useContext } from "react";
// import Cybrom from "./cybrom";
// import { createContext } from "react";
// const myContext=createContext();

// const App=()=>{
//     const [name,setName]=useState("sanju")
//     return(
//         <>
//         <h1>welcome!!!</h1>
//     <myContext.Provider value={{name,setName}}>
//     <Cybrom/>
//     </myContext.Provider>
//         </>
//     )
// }
// export default App;
// export {myContext};
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\()\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// import Cybrom from "./cybrom";
// const App=()=>{
      
//         return(
//             <>
//     <h1>welcome</h1>
    
//         <Cybrom/>       
//      </>
//         )
//     }
//     export default App;
/////////////////////////////////(context api)/////////////////////////////////////////////////////////

import Authapp from "./authapp";
import Unauthapp from "./unauthapp";
import { useContext } from "react";
import { myContext } from "./logincontext";
const App=()=>{
      const{user}=useContext(myContext);
            return(
                <>
        <h1>login system!!!</h1>
        {user.auth? <Authapp/> :<Unauthapp/>}
        
     
         </>
            )
        }
        export default App;