import { Component } from "react";
import './style.css';



class TimeList extends Component{
    render(){
        return(
            <div className = "time-list">
              {this.props.time}
            </div>
        )
    }
}

export default TimeList;