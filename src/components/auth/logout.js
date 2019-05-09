import React from 'react'
import axios from 'axios'

class Logout extends React.Component{
    
    handleClick=(event)=>{
        event.preventDefault();
        console.log(this.props.user);
        axios.post("http://localhost:3002/api/logout",{
            user: this.props.user
        },{withCredentials:true})
        .then((response)=>{
        console.log(response)
        if(response.status === 200){
            console.log("these are the logout routes:" + this.props);
            this.props.logout();
            console.log("Succesfull Logout");
        }else{
            console.log("Already Loggedout jejejee")
        } 
        })
        .catch((e)=>console.log(e))
    }
    render(){
        console.log(this.props)
        return(
            <div> 
                <button onClick={event => this.handleClick(event)} >Logout</button>
            </div>
        )
    }
}
export default Logout