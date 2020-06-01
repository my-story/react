import React, { Component } from 'react'

class PasswordChange extends Component {

    state= {
        editName: false,
    }

    editData = () => {
        const {user, unchangedUser} = this.state;
        let name = this.state.editName === false ? true : false;
        this.setState({ editName: name });
    };

    render () {
//NEEDS TO VERYFY IF TYPED PASSWORD IS THE RIGHT ONE, THEN GIVE HIM THE OPTION TO CHANGE IT.
        return (
            <div className="settings-div">
            <div className="settings-option-name">
                <p>Password</p>
            </div>
            <div className="settings-options-div">
                <p>*********</p>
                <p>Edit</p>
            </div>
        </div>
        )
    }
}

export default PasswordChange