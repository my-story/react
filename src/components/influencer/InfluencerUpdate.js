import React, {Component} from 'react';
import { Redirect} from 'react-router-dom'
import { Input, Tooltip, Icon, Select } from 'antd';
import * as toastr from 'toastr';
import UserContext from '../contexts/UserContext';
import InfluencerServices from '../../services/InfluencerServices';

const OPTIONS = ["Athlete","Musician","Tech","Artist"];

class InfluencerUpdate extends Component{
    state = {
			data: {
				expertise:this.props.location.state.influencer.expertise,
        firstName: this.props.location.state.influencer.name.firstName,
				lastName: this.props.location.state.influencer.name.lastName,      
				review:this.props.location.state.influencer.review,
				percentage:this.props.location.state.influencer.percentage,
				user: this.context.user,
				image: this.props.location.state.influencer.profilePic,
        },
        selectedItems: [],
        done: false,
        influencerDone: {},
    }
    static contextType = UserContext;

    onChange = (e) => {
        let { data } = this.state
        data[e.target.name] = e.target.value
        this.setState({ data })
    }

    handleChange = (selectedItems) => {
			this.setState({data:{
					...this.state.data,
					expertise: selectedItems} })
    }

		onSubmit = () => {
			let { data } = this.state;
			
			if(data.expertise.length === 0 || data.firstName.length === 0 || data.lastName.length === 0 || data.review.length === 0){
					toastr.error("Please complete all required fields")
					return
			}

			const id = this.props.location.state.influencer._id;
			InfluencerServices.updateInfluencer(data, id)
				.then(() => this.setState({done:true}))
				.catch(err=>console.log(err))

    }


    render(){
        const { selectedItems,data } = this.state;
        const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o))
        if (this.context.user.role === "Admin") {
          if (!this.state.done) {
            return(
              <div>   
                  <h1>Create Influencer</h1>
                  <div className="create-card">
                      <Input name="firstName" defaultValue={data.firstName}placeholder="Enter Person's Name" onChange={this.onChange} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} suffix={
                      <Tooltip title="Make Sure to write with Capitals">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                      </Tooltip>
                  }/>
                      <Input name="lastName" defaultValue={data.lastName} placeholder="Last Name " allowClear onChange={this.onChange} />
                      <Input name="review" defaultValue={data.review} placeholder="Description of person, hobbies, sports, job, etc... " allowClear onChange={this.onChange} />
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
                      <Input name="percentage" defaultValue={data.percentage} type="Number" placeholder="Percentage of profit of product (Write in decimals)" onChange={this.onChange} />
                      <Input name="image" defaultValue={data.image} placeholder="image" onChange={this.onChange} />
                      <button onClick={this.onSubmit}>Update</button>
                      </div>
              </div>
            )
          } else {
            return( <Redirect to="/"></Redirect>)
          }
    } else {
        return( <Redirect to="/"></Redirect>)
    }}
};

export default InfluencerUpdate;
