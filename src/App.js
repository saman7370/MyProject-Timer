import {useState } from "react";
import './style.css';
import Title from "./Title";
import Timer from "./Timer";
// import TimeList from "./TimeList";




// class App extends Component{
//     constructor(){
//         super();
//         this.state = {
//             head :"سلام به پروژه تایمر من خوش آمدید"
//         }
//     }

// handleSetTitle = ()=>{
//         this.setState({
//         head : "با زدن روی خود تایمر تایم مورد نظر چاپ میشود و با کلیک بر روی تایم مورد نظر آن تایم حذف میشود",
//         })
//     }

//     render(){
//         return(
//             <div className = "main">
//                 <Title head = {this.state.head}/>
//                 <Timer handleSetTitle = {this.handleSetTitle}/>  
//             </div>

//         )
//     }
// }

const App = ()=>{
    const[head , setHead] = useState("سلام به پروژه تایمر من خوش آمدید")
    const[time , setTime] = useState([])

    const handleSetTitle = ()=>{
        setHead("با زدن روی خود تایمر تایم مورد نظر چاپ میشود و با کلیک بر روی تایم مورد نظر آن تایم حذف میشود")
    } 

    return(
        <div className = "main">
            <Title>
                {head}
            </Title>
            <Timer time = {time} setTime = {setTime} handleSetTitle = {handleSetTitle}/>
        </div>
    )
}


export default App;