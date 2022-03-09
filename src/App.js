import {useState } from "react";
import './style.css';
import './responsive.css';
import Title from "./Title";
import Timer from "./Timer";
import TimeList from "./TimeList";
import { TimerContext } from "./context";
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
        setHead("با زدن روی خود تایمر تایم مورد نظر چاپ میشود")
    }
    
    const handleBackTitle = ()=>{
        setHead("سلام به پروژه تایمر من خوش آمدید")
    }

return(
    <div className = "main">
        <TimerContext.Provider value ={{
            head,
            time,
            setTime,
        }}>
            <Title head = {head}/>
            <Timer handleSetTitle = {handleSetTitle} handleBackTitle = {handleBackTitle}/>
            <TimeList time = {time} setTime = {setTime}/>
        </TimerContext.Provider>
    </div>
    )
}


export default App;