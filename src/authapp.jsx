import { useContext } from "react";
import { myContext } from "./logincontext";

const Authapp=()=>{
    const {user,logout}=useContext(myContext);
    return(
        <>
        <h1>welcome:{user.name}</h1>
        <button onClick={logout}>LOGOUT</button>
        </>
    )
}
export default Authapp;