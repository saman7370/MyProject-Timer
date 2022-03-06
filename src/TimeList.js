// import { Component } from "react";
import './style.css';
import Item from "./Item";



// class TimeList extends Component{
//     render(){
//         return(
//             <div className = "time-list">
//               {this.props.time}
//             </div>
//         )
//     }
// }

const TimeList = (props)=>{
    return(
        <div className = "time-list">
            {props.children.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))}
        </div>
    )
}

 export default TimeList;