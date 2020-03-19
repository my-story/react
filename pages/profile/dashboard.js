import React, { Component } from 'react'; 
import SurvivalKitProfile from '../../components/survivalKit/SurvivalKitProfile';
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

        if(!this.state.user) {
            return(<div>Loading...</div>)
        } else {
            return (
                <div className="profile-page">
                    <div className="profile-profile-menu">
                        <div>
                              <img id="profile-picture" src="https://www.pikpng.com/pngl/m/286-2863567_contact-profile-user-default-female-suit-comments-profile.png" alt="Sage" />                        
                            {/* <div> */}
                                <h4>Name</h4>
                            {/* </div> */}
                        </div>
                        <div>
                            <div>
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="profile-glyph" />
                            <button>Order History</button>
                            </div>
                            <div>
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="profile-glyph" />
                            <button>Order History</button>
                            </div>
                            <div>
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="profile-glyph" />
                            <button>Order History</button>
                            </div>
                            <div>
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="profile-glyph" />
                            <button>Order History</button>
                            </div>
                        </div>
                    </div>
                    <div className="profile-dashboard-div">
                        {user.kits.map((kit, index) => {  
                            return(
                            <SurvivalKitProfile kit={kit} user={user}></SurvivalKitProfile>
                            )
                        })}
                    </div>
                </div>
            )
        }
        
    }
}

export default Profile