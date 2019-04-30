import React,{ Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
// import ProductServices from '../../services/ProductServices'
const url = "http://localhost:3002/product/upload/picture" 
const serviceUpload  = axios.create({url, withCredentials: true})

class  AddImage extends Component{
    state={
        privateInfo:{},
        images:{},
        done: false,
    }
    // componentDidMount(){
        // const {privateInfo} = this.state
        // this.setState({privateInfo:this.props.product})
    // }
    handleChange = (e) => {
        this.setState({images: e.target.files[0]})
    }
    handleSubmit = () => {
        const { privateInfo,images } = this.state
        this.subeImagen(images, url)
            .then((res) => {
                // console.log(res)
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
          .then( (res) => {
            //   console.log(res)
            // this.props.history.push('/')
            this.setState({done:true})
          })
          .catch( e => console.log(e))
        }

        render(){
            const {privateInfo,images,done} = this.state
            if(done){
             return (<Redirect to="/" />)      
            }
            return(
                <div className="image-page">
                <div className="image-container">
                <h1>Add Image</h1>

                    <input type="file" onChange={this.handleChange}/>    
                    <button onClick={this.handleSubmit}>Add image</button>          
                </div>
                </div>
            )
        
        }
}

export default AddImage