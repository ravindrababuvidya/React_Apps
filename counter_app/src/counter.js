import React  from "react";
import './counter.css';
class Counter extends React.Component{
     
    constructor(props){
        super(props);
        this.state ={
            counterValue : 0
        }
    }
    increment =()=>{
        this.setState(
           
           {
            counterValue : this.state.counterValue+1
           }
        )
    }
    decrement =()=>{
        this.setState(
            {
                counterValue:this.state.counterValue-1,
            }
        )
    }
render(){
    return  <div>
        <h1>Counter Value {this.state.counterValue} </h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
    </div>;
}
}

export default Counter;