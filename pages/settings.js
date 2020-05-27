import React, { Component } from 'react';
import { Input } from 'antd';
import UserContext from '../components/contexts/UserContext';

class Settings extends Component {
    state= {
        user: {},
        editName: false,
        newUser: {}
        
    }

	static contextType = UserContext;

    onChange = (e) => {
        let { user } = this.state;
        user[e.target.name] = e.target.value;
        this.setState({ user });
    };

    componentDidMount = () => {
		this.setState({user:this.context.user})

    }

    nameDiv = () => {
        const {editName, user} = this.state;
        if (editName === false) {
            return(
                <div onClick={this.editData} className="settings-div">
                <div className="settings-option-name">
                    <p>Name</p>
                </div>
                <div className="settings-options-div">
                    <p>{user.firstName} {user.lastName}</p>
                    <p>Edit</p>
                </div>
            </div>
            )

        } else {
            return(
                <div className="settings-div opened">
                <div className="settings-option-name">
                    <p>Name</p>
                </div>
                <div className="settings-options-div"> 
                    <div>
                        <div className="settings-input">
                            <p>First: </p>
                            <Input name="firstName" placeholder={user.firstName} allowClear onChange={this.onChange} />
                        </div>
                        <div className="settings-input">
                        <p>Last: </p>
                            <Input name="lastName" placeholder={user.lastName} allowClear onChange={this.onChange} />
                        </div>
                        <div className="settings-input">
                            <button id="button-save">Save</button>
                            <button onClick={this.editData}>Cancel</button>

                        </div>
                    </div>
                    <p>Edit</p>
                </div>
                </div>
            )

        }
    }


    editData = () => {
        let name = this.state.editName === false ? true : false;
        this.setState({ editName: name });
    };

    render () {
        const { user} = this.state;

        return (
            <div className="settings-page">
                <h1>Settings</h1>
                <div className="settings-container">
                    {this.nameDiv()}
                    <div className="settings-div">
                        <div className="settings-option-name">
                            <p>Email </p>
                        </div>
                        <div className="settings-options-div">
                            <p id="email-settings">{user.username}</p>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Settings