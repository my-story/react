import React, { Component } from 'react';

class TechniqueProfile extends Component {
    state = {
        technique : ""
    }

    componentDidMount() {
        this.setState({technique: this.props.technique})
    }

    render() {
        const { technique } = this.state;

        if (technique === "") 
        {
            return(
                <div>Loading...</div>
            )
        }
        else
        {
            return (
                <div className="technique-survival-kit-card">
                <div className="survival-card-image-div">
                    <img id="survival-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1582921481/TECHNIQUES_FONTGUIDEAsset_6_300x.png"/>
                </div>
                <div className="technique-kit-description-div">
                    <div className="technique-kit-name-category">
                        <p id="technique-name"><b>{technique.title}</b></p>
                        <p id="technique-word">Technique</p>
                        <div className="technique-kit-category-bubble">
                            <div>
                                <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
                                <span>Category</span>
                            </div>
                        </div>
                    </div>
                        {technique.subheading.map((t ,index) => {
                            if(t.descriptions.length > 0){
                                return(
                                    <div className="technique-kit-description-p">
                                        <div className="technique-header-div">
                                            <p><b>{t.header}</b></p>
                                        </div>
                                        {t.descriptions.map((description,index) => {
                                            
                                            return(
                                                <div key={index} className="technique-steps">
                                                <p>- {description}</p><br></br>
                                                {/* <p>- description</p><br></br>         */}
                                            </div>
                                            )
                                        })}
                    
                                    </div>
                                )
                            }
    
                        })}
       
                    </div>
                    {/* <div className="line-2"></div>
                    <div className="survival-prize-div">
                    <div className="survival-save-favorite">
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
                        </div>
                        <p id="survival-prize">$150</p>
                        <button className="survival-kit-add-to-cart">Add to card</button>
                    </div> */}
                            <div className="line-2"></div>
                        <div className="technique-survival-prize-div">
                        <div className="survival-save-favorite">
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
                        </div>
                            
                        </div>
                </div>
            );
        }
        
    }
}

export default TechniqueProfile;