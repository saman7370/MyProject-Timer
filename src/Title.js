// import { Component } from "react";


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
    return(
        <div className = "head">
            {props.children}
        </div>
    )
}

export default Title;