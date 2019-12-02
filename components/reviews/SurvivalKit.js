import React,{ Component } from 'react';

class SurvivalKit extends Component {

    render(){
        return(
            <div className="survival-kit-card">
                <div className="survival-card-image-div">
                    <img id="survival-image" src="https://www.stickpng.com/assets/images/580b585b2edbce24c47b2b90.png"/>
                </div>
                <div className="kit-description-div">
                    <p>Manduka</p>
                    <p id="product-name"><b>Pro Yoga Mat</b></p>
                    <div className="kit-category-bubble">
                        <div>
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
                           <span>category</span>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
                           <span>category</span>
                        </div>
                    </div>
                    <div className="learn-more">
                      <span>Learn more</span>
                        <img id="arrow-down-kit" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg" alt="laern more arrow" />
                        </div>
                </div>
                <div>
                    <div>15-$</div>
                    <button>Add to card</button>
                    <div>save to favorites</div>
                </div>

            </div>
        )
    }
}

export default SurvivalKit