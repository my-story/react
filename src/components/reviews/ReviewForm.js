import React,{ Component } from 'react'
import ReviewServices from "../../services/ReviewServices"
// import AudioPlayer from "react-h5-audio-player";
// import ReactAudioPlayer from "react-audio-player";
// import ReviewAudio from './ReviewAudio';
import { Redirect} from 'react-router-dom'
import { Input } from 'antd';
const { TextArea } = Input;

class ReviewForm extends Component{
    state= {
      
        title:"",
        review:"",
        influencer:"",
        video:"",
        voicenote:"",
     

      // file: "",
      // id: "",
      // finalFile: "",
      created:false,
      reviewDone:{}

    }


    onChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = () => {
  
      // const formData = new FormData()
      // formData.append('track', this.state.file)
      // formData.append('name',  this.state.file.name)

      // //why dont I put with credentials

      // axios.post('http://localhost:3002/audio', formData,{withCredentials: true})
      // .then(response => {
      //   console.log(response)
      //     // this.setState({
      //     //   id: response.data.message
      //     // })
      //     axios.get('http://localhost:3002/audio/' + response.data.message)
      //       .then(response => {
      //         console.log(response)
      //         this.setState({
      //           finalFile: response
      //         })
      //       })
      //       .catch(error => {
      //         // toastr.error("invalid username or password");
      //         console.log(error)
      //       })
        
      // }).catch(error => {
      //     // toastr.error("invalid username or password");
      //     console.log(error)
      // })

      ReviewServices.createReview({
          title: this.state.title,
          review: this.state.review,
          influencer: this.state.influencer,
          video: this.state.video,
          voicenote: this.state.voicenote,
          user: this.props.user
        })
        .then( res => {
          this.setState({created:true,reviewDone:res})
          })
        .catch((e)=>console.log(e))
      
      
  }
      
    

    render(){
      if (this.props.user.role === "Admin"){
        if(this.state.created){
          return(<Redirect to="/"></Redirect>)
        }else{
          return(
            <div>  
              {/* <input type="file" onChange={this.handleChange}></input>
              <button onClick={this.handleSubmit}>Add Voicento</button>  
              <AudioPlayer
                autoPlay
                src="https://res.cloudinary.com/dcopnvq47/video/upload/v1556903515/BEBE_-_6ix9ine_Ft._Anuel_AA_Prod._By_Ronny_J_Official_Music_Video_ccohlm.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
              /> */}
              <Input name="title" placeholder="Please enter title " allowClear onChange={this.onChange} />
              <TextArea rows={4} name="review" placeholder="Please enter review of review" onChange={this.onChange} />
              <Input name="influencer" placeholder="Please enter infleuncer ID " allowClear onChange={this.onChange} />
              <Input name="video" placeholder="Please enter VIDEO URL CLOUDINARY " allowClear onChange={this.onChange} />
              <Input name="voicenote" placeholder="Please enter VOICENOTE URL CLOUDINARY " allowClear onChange={this.onChange} />
  
  
              {/* <Input name="voicenote" placeholder="Please enter product description" allowClear onChange={this.onChange} /> */}
             <button onClick={this.handleSubmit}>Submit</button>
            </div>
          )
            }   
  } else {
    return( <Redirect to="/"></Redirect>)
  }
}
}

export default ReviewForm;