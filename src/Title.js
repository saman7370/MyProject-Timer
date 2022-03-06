// import { Component } from "react";

import { useContext } from "react";
import { TimerContext } from "./context";





// class Title extends Component{
//     render(){
//         return(
//             <div className = "head">
//                 {this.props.head}
//             </div>
//         )
//     }
// }

const Title = (props)=>{
   const context = useContext(TimerContext);

    return(
        <div className = "head">
            {context.head}
        </div>
    )
}

export default Title;