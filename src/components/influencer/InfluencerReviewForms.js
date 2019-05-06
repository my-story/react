import React,{ Component } from 'react'
import axios from 'axios';
import AudioPlayer from "react-h5-audio-player";
import ReactPlayer from 'react-player';
import { Input } from 'antd';

const { TextArea } = Input;



class InfluencerReviewForm extends Component{
    state= {
      file: "",
      id: "",
      finalFile: "",
      review: ""
    }

    handleChange = (e) => {
      this.setState({file: e.target.files[0]});
    }

    handleTextArea = (e) => {
      this.setState({
        ...this.state,
        review: e.target.value
      })
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
            <AudioPlayer
              autoPlay
              src="https://res.cloudinary.com/dcopnvq47/video/upload/v1556903515/BEBE_-_6ix9ine_Ft._Anuel_AA_Prod._By_Ronny_J_Official_Music_Video_ccohlm.mp3"
              onPlay={e => console.log("onPlay")}
              // other props here
            />
            <ReactPlayer url='https://www.youtube.com/watch?v=iKfgcdtOfVY' playing />
            <TextArea rows={4} onChange={this.handleTextArea}/>
          </div>
        )   
}
}

export default InfluencerReviewForm;