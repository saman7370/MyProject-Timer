import { Component } from "react";
import TimeList from "./TimeList";
var interval;



class Timer extends Component{
    constructor(){
        super();
        this.state = {
            hour : 0,
            minute : 0,
            second : 0,
            isfalse : false
        }
    }

StartTimer =()=>{
    if(this.state.isfalse == false){
        this.setState({
            isfalse : true
        })   
    }

    interval = setInterval(() => {
        this.setState({
            second : this.state.second + 1
        })
        if(this.state.second == 60){
            this.setState({
                second : 0,
                minute : this.state.minute + 1
            })
        }
        if(this.state.minute == 60){
            this.setState({
                minute : 0,
                hour : this.state.hour + 1
            })
        }
        
        
    }, 1000);
}

StopTimer = ()=>{
    if(this.state.isfalse == true){
       this.setState({
           isfalse : false
    })
    }
    clearInterval(interval);
}

ResetTimer = ()=>{
    this.StopTimer();
    this.setState({
        hour : 0,
        minute : 0,
        second : 0,
        isfalse : false
    })
}

componentDidMount(){
    this.StartTimer();
}

handleSetAddTimer = ()=>{
    let h = this.state.hour;
    let m= this.state.minute;
    let s = this.state.second;
    let NewTimer = `${h > 9 ? h : "0"+h } : ${m >9 ? m : "0"+m } : ${s > 9 ? s : "0"+s }` 
    this.props.setStateTime({
        NewTimer
    })
          
}


    render(){
        let h = this.state.hour;
        let m= this.state.minute;
        let s = this.state.second;
        return(
            <>
            <div onClick = {this.handleSetAddTimer} className = "timer">
               {`${h > 9 ? h : "0"+h } : ${m >9 ? m : "0"+m } : ${s > 9 ? s : "0"+s }`}
            </div>
            <div className = "btn-box">
               <button onClick = {this.StartTimer} className = "btn-start">شروع</button>
               <button onClick = {this.StopTimer} className = "btn-stop">توقف</button>
               <button onClick = {this.ResetTimer} className = "btn-reset">شروع دوباره</button>
               <button onClick = {this.props.handleSetTitle} className = "btn-guide">راهنما</button> 
            </div>
            <TimeList time = {this.props.time}/>
            </>
            
        )
    }
}

export default Timer;