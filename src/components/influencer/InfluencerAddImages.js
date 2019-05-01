import React,{ Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import ProductCreate from '../products/ProductCreate'
// import ProductServices from '../../services/ProductServices'
const url = "http://localhost:3002/influencer/upload/photo" 
const serviceUpload  = axios.create({url, withCredentials: true})

class  AddImageInflu extends Component{
    state={
        influencer:this.props.influencer,
        privateInfo:{},
        images:{},
        done: false,
    }
    handleChange = (e) => {
        this.setState({images: e.target.files[0]})
    }
    handleSubmit = () => {
        const { privateInfo,images } = this.state
        this.subeImagen(images, url)
            .then((res) => {
                console.log(res)
                privateInfo.images = res.picture
                this.setState({ privateInfo })
            })
            .catch((e)=>console.log(e))
    }

    subeImagen = (file, url) => {
        const formData = new FormData()
        formData.append('picture', file)
        return serviceUpload.post(url, formData, {headers: {
            'Content-Type': 'multipart/form-data',
          },})
          .then( () => {
            this.setState({done:true})
          })
          .catch( e => console.log(e))
        }

        render(){
            const {privateInfo,images,done} = this.state
            console.log(images)
            if(done){
             return (<ProductCreate influencer={this.state.influencer}></ProductCreate>)      
            }
            return(
                <div className="image-page">
                <div className="image-container">
                <h1>Add Profile Pic</h1>
                    <input type="file" onChange={this.handleChange}/>    
                    <button onClick={this.handleSubmit}>Add image</button>    
                </div>
                </div>
            )
        
        }
}

export default AddImageInflu