import React, { Component } from 'react'; 
import SurvivalKitProfile from '../../components/survivalKit/SurvivalKitProfile';
import {QtyConsumer} from '../../components/contexts/QtyContext';
import UserContext from '../../components/contexts/UserContext';

class Profile extends Component{
    state = {
        user: {},
        kits: ""
    }

	static contextType = UserContext;

	componentDidMount = () => {
		this.setState({user:this.context.user, kits:this.context.user.kits})
    }

    // getKitsProfile = () => {
    //     const {kit} = this.state;

    // }
    
    render() {
        console.log(this.state)
        if(!this.state.user || this.state.kits === "") {
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
                        {this.state.kits.map((kit, index) => {
                            return(
                            <SurvivalKitProfile kit={kit}></SurvivalKitProfile>
                            )
                        })}
                    </div>
                </div>
            )
        }
        
    }
}

export default Profile