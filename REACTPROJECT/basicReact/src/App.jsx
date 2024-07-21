import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  let arr = [{a:"Dsa",b:"sda"},{a:"Dsa",b:"sda"},{a:"Dsa",b:"sda"},{a:"Dsa",b:"sda"},]


  let i=0
  function log(x){
    i++
    console.log(i);
  }

  return (
    <>
    <Button a={"clr"} b={"rounded"} c={"click1"} v={"id"}/>
    <Button a={"green"} c={"click2"}/>
    <Button a={"pink"} c={"click3"}/>
    <input type="text" onChange={(hello)=>{
      console.log(hello.target.value);
    }} name="" id="" />
    <button onClick={log}>click</button>
    <button><h1>hello</h1></button>
    {
      arr.map((e) => (
       <div>
         <h1>{e.a}</h1>
         <h1>{e.b}</h1>
       </div>
      ))
    }
    </>
  )
}



export default App

// function parent (a,b) {
//   function child(c){

//   }
//   child(b)

// }