import React,{ Component } from 'react'
import axios from 'axios';
// import Sound from "react-sound";

class InfluencerReviewForm extends Component{
    state= {
      file: "",
      id: "",
      finalFile: ""
    }

    handleChange = (e) => {
      this.setState({file: e.target.files[0]});
    }

    handleSubmit = (e) => {
      const formData = new FormData()
      formData.append('track', this.state.file)
      formData.append('name',  this.state.file.name)

      //why dont I put with credentials

      axios.post('http://localhost:3002/audio', formData,{withCredentials: true})
      .then(response => {
        console.log(response)
          // this.setState({
          //   id: response.data.message
          // })
          axios.get('http://localhost:3002/audio/' + response.data.message)
            .then(response => {
              console.log(response)
              this.setState({
                finalFile: response
              })
            })
            .catch(error => {
              // toastr.error("invalid username or password");
              console.log(error)
            })
        
      }).catch(error => {
          // toastr.error("invalid username or password");
          console.log(error)
      })
  }
      
    

    render(){
        return(
          <div>  
            <input type="file" onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit}>Add Voicento</button>  
          </div>
        )   
}
}

export default InfluencerReviewForm;