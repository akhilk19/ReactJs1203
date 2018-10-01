import React from "react";

class Master extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div>
                <h1>Hello Welcome to Akhil GITHUB</h1>
                <h3>{this.props.sample}</h3>
            </div>)
        
    }
}
export default Master;