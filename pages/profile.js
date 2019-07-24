import React, { Component } from 'react'
import UserContext from '../src/components/contexts/UserContext'

class Profile extends Component {
  state = {
    user: this.context.user
  }
  static contextType = UserContext

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Profile