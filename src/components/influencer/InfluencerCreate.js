import React,{ Component } from 'react'
import InfluencerServices from '../../services/InfluencerServices'
import { Input, Tooltip, Icon, Select } from 'antd';

const OPTIONS = ["Athlete","Musician","Tech","Artist"];

class InfluencerCreate extends Component{
    state={
        data:{},
        selectedItems: []
    }

    handleChange = selectedItems => {
        this.setState({ selectedItems });
      }

    onChange = e => {
        let { data } = this.state
        data[e.target.name] = e.target.value
        this.setState({ data })
    }

    createInfluencer(){
        InfluencerServices.createInfluencer()
    }

    render(){

        const { selectedItems } = this.state;
        const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o))
    return(
        <div>   
            <div>
                <h1>Create product</h1>
    
                <Input name="name" placeholder="Enter Influencer Name" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} onChange={this.onChange} />} suffix={
                <Tooltip title="Make Sure to write with Capitals">
                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
            }/>
                 <Input placeholder="input with clear icon" allowClear onChange={this.onChange} />
                 <Select
                    name="category" mode="multiple"
                    placeholder="Inserted are removed"
                    value={selectedItems}
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