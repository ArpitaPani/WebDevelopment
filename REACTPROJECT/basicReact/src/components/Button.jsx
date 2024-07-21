import './Button.css'

function Button({a,b,c,v}){  
    let x = {
        color:a,
        borderRadius: b=="rounded" ? "50px" : "0px" 
    }
    return (
      <div>
        <button className='btn' id={v} style={x}>{c}</button>
      </div>
    )
}




export default Button;