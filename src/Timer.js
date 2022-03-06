import { Component } from "react";
import { TimerContext } from "./context";
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

static contextType = TimerContext;

StartTimer =()=>{
    if(this.state.isfalse === false){
        this.setState({
            isfalse : true
        })   
    }

    interval = setInterval(() => {
        this.setState({
            second : this.state.second + 1
        })
        if(this.state.second === 60){
            this.setState({
                second : 0,
                minute : this.state.minute + 1
            })
        }
        if(this.state.minute === 60){
            this.setState({
                minute : 0,
                hour : this.state.hour + 1
            })
        }
        
        
    }, 1000);
}

StopTimer = ()=>{
    if(this.state.isfalse === true){
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
    let NewTimer = document.querySelector('.timer').innerHTML
    this.context.setTime([...this.context.time , NewTimer])         
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
               <button onClick = {this.props.handleBackTitle} className = "btn-back">برگشت</button> 
            </div>
            
            
            </>
            
        )
    }
}

export default Timer;