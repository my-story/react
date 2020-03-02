import React, { Component } from 'react';
import Router from 'next/router';
import { Input, Tooltip, Icon, Select } from 'antd';
import * as toastr from 'toastr';
import UserContext from '../../../components/contexts/UserContext';
import InfluencerServices from '../../../services/InfluencerServices';

const OPTIONS = ["Athlete", "Musician", "Tech", "Artist"];

class InfluencerUpdate extends Component {
  state = {
    data: {
      user: this.context.user
    },
    selectedItems: [],
    done: false,
    influencerDone: {},
  }
  static contextType = UserContext;
  static getInitialProps({ query: { id } }) {
    return { id };
  }

  componentDidMount() {
    InfluencerServices.getOne(this.props.id)
      .then(({ data: influencer }) => {
        // console.log(influencer.profilePic);
        this.setState(state => ({ 
          data: {
            expertise: influencer.expertise,
            firstName: influencer.name.firstName,
            lastName: influencer.name.lastName,
            description: influencer.description,
            image: influencer.profilePic,
          }
        }));
      })
  }

  onChange = (e) => {
    let { data } = this.state
    data[e.target.name] = e.target.value
    this.setState({ data })
  }

  handleChange = (selectedItems) => {
    this.setState({
      data: {
        ...this.state.data,
        expertise: selectedItems
      }
    })
  }

  onSubmit = () => {
    let { data } = this.state;

    if (data.expertise.length === 0 || data.firstName.length === 0 || data.lastName.length === 0 || data.description.length === 0) {
      toastr.error("Please complete all required fields")
      return
    }

    const id = this.props.id;
    InfluencerServices.updateInfluencer(data, id)
      .then(() => this.setState({ done: true }))
      .catch(err => console.log(err))

  }


  render() {
    const { selectedItems, data } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o))
    console.log(this.state)
    if (this.context.user.role === "Admin" && !this.state.done) {
      return (
        <div>
          <h1>Create Influencer</h1>
          <div className="create-card">
            <Input name="firstName" value={data.firstName} placeholder="Enter Person's Name" onChange={this.onChange} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} suffix={
              <Tooltip title="Make Sure to write with Capitals">
                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            } />
            <Input name="lastName" value={data.lastName} placeholder="Last Name " allowClear onChange={this.onChange} />
            <Input name="description" value={data.description} placeholder="Description of person, hobbies, sports, job, etc... " allowClear onChange={this.onChange} />
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
            <Input name="image" value={data.image} placeholder="image" onChange={this.onChange} />
            <button onClick={this.onSubmit}>Update</button>
          </div>
        </div>
      )
    } else {
      Router.push('/admin/influencer-chart');
      return null;
    }
  }
};

export default InfluencerUpdate;
