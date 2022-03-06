//   import { Component } from "react";


// class Item extends Component{
//     render(){
//         return(
//             <div>
               
//             </div>
//         )
//     }
// }

const Item = (props)=>{
    return(
        <div className = "item">
            {props.children}
        </div>
    )
}

export default Item;