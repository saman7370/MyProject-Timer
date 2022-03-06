import { Component } from "react";


class Title extends Component{
    render(){
        return(
            <div className = "head">
                {this.props.head}
            </div>
        )
    }
}

export default Title;