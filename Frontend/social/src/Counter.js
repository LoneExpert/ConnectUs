import React,{useEffect, useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const [secondCounter,setsecondCounter] = useState(100)

    useEffect(()=>{
        console.log("Mounting Phase...")
    },[])

    useEffect(()=>{
        console.log("Updating Phase...")
    },[count,secondCounter])

    return (
        <div>
            <h1>Counter : {count} </h1>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <button onClick={()=>{setCount(count-1)}}>-</button>
            <p>I am Sad </p>

            <h1>-----------------------------------------------------</h1>

            <h1>Second Counter : {secondCounter} </h1>
            <button onClick={()=>{setsecondCounter(secondCounter+1)}}>+</button>
            <button onClick={()=>{setsecondCounter(secondCounter-1)}}>-</button>
        </div>
    )
}
