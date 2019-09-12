import React, { Component } from 'react';


class AdminPanelField extends Component {
  state = {
    influencers: {}
  };

  render() {
    console.log(this.props.influencers)
    return(
      <ul>
        <li>{this.props.influencer._id}</li>
        <li>{this.props.influencer.name.firstName}</li>
        <li>{this.props.influencer.name.lastName}</li>
      </ul>
    )
  }
}

export default AdminPanelField;