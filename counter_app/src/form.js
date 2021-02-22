import React from "react";
class Form extends React.Component{
constructor(props){
    super(props);
    this.state = {
        username:""
    }
}

updateUser = (e)=>{
    this.setState({
        username:e.target.value
    })
}

render(){
    return <div>
        <label>User is {this.state.username}</label><br/>
        <label>User :</label>
        <input type="text" onChange={this.updateUser} name="username"/>
    </div>
}

}

export default Form;