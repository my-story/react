import React,{ Component } from 'react'
import InfluencerServices from '../../services/InfluencerServices'
import { Input, Tooltip, Icon, Select } from 'antd';
import { Redirect } from 'react-router-dom';

const OPTIONS = ["Athlete","Musician","Tech","Artist"];

class InfluencerCreate extends Component{
    state={
        data:{
            expertise:[],
            name: "",
            review:""
        },
        selectedItems: [],
        done: false
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
        InfluencerServices.createInfluencer(data)
            .then((influencer)=>console.log("influencer is " + influencer) ,this.setState({
                done: true
            }))
            .catch((e)=>console.log(e))
    }


    render(){
        const { selectedItems,data } = this.state;
        const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o))
        console.log(data)

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
        return (<Redirect to="crear/product" />);
    }
}
}
export default InfluencerCreate