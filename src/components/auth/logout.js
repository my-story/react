import React from 'react'
import axios from 'axios'

class Logout extends React.Component{
    
    logOut=()=>{
        axios.post("http://localhost:3002/api/logout",{
            user: this.props.user
        },{withCredentials:true})
        .then((response)=>{
        console.log(response)
        if(response.status === 200){
            this.props.logout();
            console.log("Succesfull Logout");
        }else{
            console.log("Already Loggedout jejejee")
        } 
        })
        .catch((e)=>console.log(e))
    }
    render(){
        return(
            <div> 
                <button onClick={this.logOut} >Logout</button>
            </div>
        )
    }
}
export default Logout