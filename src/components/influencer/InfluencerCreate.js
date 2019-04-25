import React,{ Component } from 'react'
// import InfluencerServices from '../../services/InfluencerServices'
import { Input, Tooltip, Icon, Select, Button } from 'antd';

const OPTIONS = ["Athlete","Musician","Tech","Artist"];

class InfluencerCreate extends Component{
    state={
        data:{
            category:[],
            name: "",
            description:""
        },
        selectedItems: []
    }

 

    onChange = e => {
        let { data } = this.state
        data[e.target.name] = e.target.value
        this.setState({ data })
    }

    handleChange = selectedItems => {
        const { data } = this.state
        this.setState({data:{
            ...this.state.data,
            category: selectedItems} })
            this.props.onCreation(data);
      }


    render(){
        const { selectedItems,data } = this.state;
        const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o))
        console.log(data)

    return(
        
        <div>   
                <h1>Create Influencer</h1>

            <div className="create-card">
    
                <Input name="name" placeholder="Enter Person's Name" onChange={this.onChange} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} suffix={
                <Tooltip title="Make Sure to write with Capitals">
                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
            }/>
                 <Input name="description" placeholder="Description of person, hobbies, sports, job, etc... " allowClear onChange={this.onChange} />
                 <Select
                     mode="multiple"
                    placeholder="This is his/her Category. ADMIN can create new categories"
                    value={data.category}
                    onChange={this.handleChange}
                    style={{ width: '100%' }}>
                    {filteredOptions.map(item => (
                    <Select.Option key={item} value={item}>
                        {item}
                    </Select.Option>
                    ))}
                </Select>
                </div>
        </div>
    )
    }
}
export default InfluencerCreate