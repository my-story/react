import React,{ Component } from 'react';
import * as toastr from 'toastr';
import KitServices from '../../services/KitServices';
// import ProductKit from '../survivalKit/ProductKit';
import TechniqueProfile from '../profile/TechniqueProfile';
import TipProfile from './TipProfile';
import ProductKitProfile from './ProductKitProfile';
// import TipKit from '../survivalKit/TipKit';

class SurvivalKitProfile extends Component {

    state = {
        user: "",
        kit: "",
        tips: ""
    };  
    
    // static getInitialProps({ query: { id } }) {
    //     return { id };
    // }

    componentDidMount = () => {
        this.setState({user:this.props.user});

        KitServices.getKitProfile(this.props.kit)
        .then((kit) => {
            this.setState({kit}) 
        })
        .catch((err) => console.log(err))
    };


    showMore = () => {
        if (this.state.size === "150px") {
            return(
            <div onClick={this.openCard} className="learn-more-survival">
                <p>Show more</p>
                <img id="arrow-down-kit" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg" alt="laern more arrow" />
            </div>
            )
        } else {
            return(
                <div onClick={this.openCard} className="learn-more-survival">
                <p>Show less</p>
                <img style={{transform:"rotate(-180deg)"}}id="arrow-down-kit" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg" alt="laern more arrow" />
            </div>
            )
        }
    };

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
    };

    render(){
        const {kit, user } = this.state || {};
        
        console.log(this.state);

        if (kit === undefined || kit.influencer === undefined ) {
            return(<div>...</div>)
        } else {
            return (
                <div className="product-kit-page">
                <div className="rectangle-survival-title">
                    <img className="rectangle-survival-title-picture" src={kit.influencer.profilePic}/>
                    <div className="review-survival-title">
                    <div>
                        <h2 id="review-survival-title"><b>{kit.title}</b></h2>
                    </div>
                    <div>
                        <h4 id="review-survival-title">{kit.influencer.name.firstName} {kit.influencer.name.lastName}</h4>
                    </div>
                    </div>
                        <img id="survival-title-bookmark-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
                </div>     
                    {kit.products.map((product , index) => { 
                    if (user.products.includes(product._id))
                    {
                        return(
                            <ProductKitProfile product={product}></ProductKitProfile>
                        )
                    } 
                    })}
                    {kit.techniques.map((technique , index) => { 
						if (user.techniques.includes(technique._id))
						{
							return(
                                <TechniqueProfile technique={technique}></TechniqueProfile>
                            ) 
						} 
                    })}
                    {kit.tips.map((tip , index) => { 
                    if (user.tips.includes(tip._id))
                    {
                      return (
                        <TipProfile tip={tip}></TipProfile>
                      )
                       
                    }
                    })}
                
                {/* {kit.products.map((p, index) => {
                    let product = p.product;
                    return(
                    <ProductKit p={p} product={product} kit={kit} ></ProductKit>
                    )
                })} */}
    
                {/* //Techniques DESIGN FIGURE OUT How to dispaly all of them */}
                {/* {kit.techniques.map((technique , index) => {
                    return(
                        <TechniqueKit technique={technique} kit={kit}></TechniqueKit>
                    )
                })
                } */}

                {/* TIPS MAP */}
                {/* {kit.tips.map(( tip, index ) => {
                    return(
                        <div key={index}>
                            <TipKit tip={tip} kit={kit} key={index}></TipKit>
                        </div>
                    )
                })} */}

                </div>
            )    

        }
            }
}

export default SurvivalKitProfile;