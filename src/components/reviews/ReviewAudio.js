import React,{Component} from 'react'
import axios from 'axios'

const url = "http://localhost:3002/reviews/upload/voicenote" 
const serviceUpload  = axios.create({url, withCredentials: true})

class ReviewAudio extends Component{
    state={
        review:this.props.reviewDone,
        voicenote:{},
        privateInfo:{},
        done: false,
    }
    handleChange = (e) => {
        this.setState({voicenote: e.target.files[0]})
    }
    handleSubmit = () => {
        const { privateInfo,voicenote } = this.state
        this.subeImagen(voicenote, url)
            .then((res) => {
                console.log(res)
                privateInfo.images = res.picture
                this.setState({ privateInfo })
            })
            .catch((e)=>console.log(e))
    }

    subeImagen = (file, url) => {
        const formData = new FormData()
        formData.append('mp3', file)
        return serviceUpload.post(url, formData, {headers: {
            'Content-Type': 'multipart/form-data',
          },})
          .then( () => {
            this.setState({done:true})
          })
          .catch( e => console.log(e))
        }
    render(){
        const {voicenote} = this.state
        console.log(voicenote)
        return(
            <div>
                <input type="file" onChange={this.handleChange}/>    
                <button onClick={this.handleSubmit}>Add image</button>  
            </div>

        )
    }
}
export default ReviewAudio