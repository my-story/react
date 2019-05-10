import React,{ Component } from 'react'
import InfluencerServices from '../../services/InfluencerServices'
import ProductCreate from '../products/ProductCreate';
import { Redirect} from 'react-router-dom'
import { Input, Tooltip, Icon, Select } from 'antd';
import * as toastr from 'toastr'
import AddImageInflu from './InfluencerAddImages';
// import { Redirect } from 'react-router-dom';

const OPTIONS = ["Athlete","Musician","Tech","Artist"];

class InfluencerCreate extends Component{
    state={
        data:{
            expertise:[],
            name: "",
            review:"",
            user: this.props.user
        },
        selectedItems: [],
        done: false,
        influencerDone: {},
    }

 

    onChange = e => {
        let { data } = this.state
        data[e.target.name] = e.target.value
        this.setState({ data })
    }

    handleChange = selectedItems => {
        this.setState({data:{
            ...this.state.data,
            expertise: selectedItems} })
    }
      onSubmit=()=>{
        let { data } = this.state
        if(data.expertise.length === 0 || data.name.length === 0 || data.review.length === 0){
            toastr.error("Please complete all required fields")
            return
        }
        InfluencerServices.createInfluencer(data)
            .then((influencer)=> this.setState({
                influencerDone: influencer,
                done: true,
            }))
            .catch((e)=>console.log(e))
    }


    render(){
        const { selectedItems,data } = this.state;
        const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o))
        if (this.props.user.role === "Admin"){
            if(!this.state.done) {
                return(
                <div>   
                        <h1>Create Influencer</h1>
        
                    <div className="create-card">
            
                        <Input name="name" placeholder="Enter Person's Name" onChange={this.onChange} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} suffix={
                        <Tooltip title="Make Sure to write with Capitals">
                        <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                    }/>
                        <Input name="review" placeholder="Description of person, hobbies, sports, job, etc... " allowClear onChange={this.onChange} />
                        <Select
                            mode="multiple"
                            placeholder="This is his/her Category. ADMIN can create new categories"
                            value={data.expertise}
                            onChange={this.handleChange}
                            style={{ width: '100%' }}>
                            {filteredOptions.map(item => (
                            <Select.Option key={item} value={item}>
                                {item}
                            </Select.Option>
                            ))}
                        </Select>
                        <button onClick={this.onSubmit}>Submit</button>
                        </div>
                </div>
            )
            } else {
                return (<AddImageInflu influencer={this.state.influencerDone}></AddImageInflu>);
            }
    } else {
        return( <Redirect to="/"></Redirect>)
    }
    }
}
export default InfluencerCreate