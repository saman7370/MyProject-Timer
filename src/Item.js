//   import { Component } from "react";

import { useContext } from "react";
import { TimerContext } from "./context";


// class Item extends Component{
//     render(){
//         return(
//             <div>
               
//             </div>
//         )
//     }
// }

const Item = (props)=>{
    const context = useContext(TimerContext);

    const handleDeletItem = (e)=>{
        context.setTime(context.time.filter(t=>t != e.target.innerHTML))
    }

    return(
        <div className = "item" onClick = {handleDeletItem}>
            {props.children}
        </div>
    )
}

export default Item;