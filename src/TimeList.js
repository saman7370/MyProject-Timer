// import { Component } from "react";
import './style.css';
import './responsive.css';
import Item from "./Item";
import { TimerContext } from './context';
import { useContext } from 'react';



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
    const context = useContext(TimerContext);
    return(
        <div className = "time-list">
            {context.time.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))}
        </div>
    )
}

 export default TimeList;