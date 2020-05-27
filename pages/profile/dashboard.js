import React, { Component } from 'react'; 
import Router from 'next/router';
import SurvivalKitProfile from '../../components/profile/SurvivalKitProfile';
import {QtyConsumer} from '../../components/contexts/QtyContext';
import UserContext from '../../components/contexts/UserContext';

class Profile extends Component{
    state = {
        user: {},
    }

	static contextType = UserContext;

	componentDidMount = () => {
		this.setState({user:this.context.user})
    }

    // getKitsProfile = () => {
    //     const {kit} = this.state;

    // }
    
    render() {
        const { user } = this.context;
  
        if (user) {
            return (
                <div className="profile-page">
                    <div className="profile-profile-menu">
                        <div>
                              <img id="profile-picture" src="https://www.pikpng.com/pngl/m/286-2863567_contact-profile-user-default-female-suit-comments-profile.png" alt="Sage" />                        
                            {/* <div> */}
                                <p>{user.firstName}</p>
                            {/* </div> */}
                        </div>
                    
                    </div>
                    <div className="profile-dashboard-div">
                        <h1>My Survival Kits</h1>
                        {user.kits.map((kit, index) => {  
                            return(
                            <SurvivalKitProfile kit={kit} user={user}></SurvivalKitProfile>
                            )
                        })}
                    </div>
                </div>
            )

        } else {
            Router.push('/');
            return null;
        }
            
        }
}

export default Profile