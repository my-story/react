import React,{ Component } from 'react';
import KitServices from '../../services/KitServices';
import * as toastr from 'toastr';

class ProductKit extends Component {

    state = {
        
    };
    
    static getInitialProps({ query: { id } }) {
        return { id };
    }

    componentDidMount = () => {
        KitServices.getKit(this.props.id)
        .then((kit) => {
            this.setState({kit})
        })
        .catch((err) => console.log(err))
        }


    // }
    // getReview = () => {
    //     this.setState({kit: this.props.kit[0]})
    // }

//Add three dots ... after a certain length of the string.
    shrinkParagraph = (p) => {
        // const {kit} = this.state;
        const length = p.length;
         if (length > 100){
             return(
                 <p>{p.substring(0,100)} ...</p>
             )
         } else {
            return(
                <p>{p}...</p>
            )
         }
    }
    learnMore = (e) => {
        const clase = e.target.className;
        if(clase !== "open") {

        }
    }
    render(){
        
        const {kit} = this.state || {};

        console.log(kit)

        if (kit === undefined || kit.products === undefined) {
            return(<div>...</div>)
        } else {
            return (
                <div className="product-kit-page">
                {kit.products.map((p, index) => {
                    let product = p.product;
                    
                    return(
                        <div key={index} className="survival-kit-card">
                        <div className="survival-card-image-div">
                            <img id="survival-image" src={product.images}/>
                        </div>
                        <div className="kit-description-div">
                            <p id="product-name"><b>{product.model}</b></p>
                            <div className="kit-category-bubble">
                                <div>
                                    <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
                                    <span>{product.category}</span>
                                </div>
                            </div>
                            <div className="kit-description-p">
                                {this.shrinkParagraph(p.comment)}
                            </div>
                            <div className="learn-more-survival">
                                <p>Learn more</p>
                                <img id="arrow-down-kit" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg" alt="laern more arrow" />
                            </div>
                        </div>
                        <div className="line-2"></div>
                        <div className="survival-prize-div">
                        <div className="survival-save-favorite">
                                <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
                                
                            </div>
                            <p id="survival-prize">${product.prize}</p>
                            <button className="survival-kit-add-to-cart">Add to card</button>
                        
                        </div>
                    </div>
                    )
                })}
    
                <div className=" open survival-kit-card">
                    <div className="survival-card-image-div">
                        <img id="survival-image" src="https://www.stickpng.com/assets/images/580b585b2edbce24c47b2b90.png"/>
                    </div>
                    <div className="kit-description-div">
                        <p>Manduka</p>
                        <p id="product-name"><b>Pro Yoga Mat</b></p>
                        <div className="kit-category-bubble">
                            <div>
                                <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
                                <span>Category</span>
                            </div>
                            <div>
                                <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
                                <span>Category</span>
                            </div>
                        </div>
                        <div className="learn-more-survival">
                            <span>Learn more</span>
                            <img id="arrow-down-kit" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg" alt="laern more arrow" />
                            </div>
                    </div>
                    <div className="line-2"></div>
                    <div className="survival-prize-div">
                    <div className="survival-save-favorite">
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
                        </div>
                        <p id="survival-prize">$150</p>
                        <button className="survival-kit-add-to-cart">Add to card</button>
                    
                    </div>
                </div>
    
                {/* //TIPS DESIGN FIGURE OUT How to dispaly all of them */}
                <div onClick={this.learnMore} className="open survival-kit-card tips-card">
                <div className="tip-image-div">
                        <img id="survival-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1576256025/cloud.svg"/>
                    </div>
                    <div className="kit-description-div">
                        <p style={{color:"#F66C4F"}}>Technique</p>
                        <p id="tip-name"><b>This is the name of the technique</b></p>
                        <div className="kit-category-bubble">
                            <div>
                                <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
                                <span>Category</span>
                            </div>
                            <div>
                                <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
                                <span>Category</span>
                            </div>
                        </div>
                        <p id="tip-intro-description">Brief descriptin, yea yea , jajajaj esta tecnica es para energitarse despues de la siesta.</p>
                                <div className="learn-more">
                                                    <div className="learn-word">
                            <span>Learn more</span>
                            <img id="arrow-down-kit" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg" alt="laern more arrow" />
                                                    </div>
                                                <div className="learn-div">
                                                <div className="learn-technique"> 
                                                <p id="follow-these-steps"><b>Follow these steps:</b></p>
                            <ol style={{paddingLeft: "15px" }}>
                                <li>Drink 8 water drinks</li>
                                <li>Workout</li>
                                <li>Do it for the vine</li>
                            </ol>
                            </div>
                                                </div>
                        </div>
                    </div>
                    {/* <div className="line-2"></div> */}
                    <div className="tip-save-div">
                        <div className="survival-save-favorite technique">
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
                            <span>save to favorites</span>
                        </div>
                    </div>
                </div>
                </div>
            )    

        }
            }
}

export default ProductKit;