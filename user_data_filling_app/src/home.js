import React,{Component  } from "react";
import Form from "./form";
import Table from "./table";
class Home extends Component{
   
        state ={
            users:[]
        }

    removeUser = (index)=>{
        const { users } = this.state;
        this.setState({
            users:users.filter((user,i)=>{
                return i !== index;
            })
        })
    }

    handleSubmit =(user)=>{
        this.setState({
            users:[...this.state.users,user]
        })
    }

    render(){
        const { users } = this.state;

        return(<div className="container">
            <h1>React Tutorial</h1>
            <p>Add a character with a name and a job to the table.</p>
        
        <Table userData={users}
                    removeUser={this.removeUser} />
                    <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
        </div>)
    }

}

export default Home;