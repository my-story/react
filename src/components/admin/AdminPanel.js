import React, { Component } from 'react';
import InfluencerServices from '../../services/InfluencerServices';
import AdminPanelField from './AdminPanelField';


class AdminPanel extends Component {
  state = {
    influencers: []
  };

  fetchInfluencer = () => {
    InfluencerServices.getAllAdmin()
      .then(influencers => this.setState({
        influencers: influencers
      }))
      .catch((err) => console.log(err))
  }

  componentDidMount = () =>{
    this.fetchInfluencer();
  }


  render() {
    return(
      <div>
        {this.state.influencers.map((i, index) => {
          return (
            <AdminPanelField influencer={i} index={index} />
          )
        })}
      </div>
    )
  }
}

export default AdminPanel;