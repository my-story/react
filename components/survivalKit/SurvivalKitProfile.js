import React,{ Component } from 'react';
import * as toastr from 'toastr';
import KitServices from '../../services/KitServices';
import ProductKit from './ProductKit';
import TechniqueKit from './TechniqueKit';
import TipKit from './TipKit';

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

    getUserList = () => {
        const {kit , user} = this.state;

        if(kit) {
				//    console.log(kit.tips.some(x => user.tips.includes(x._id)));
					if (user.tips.length > 0) {
						
					kit.tips.map((tip , index) => { 
						if (user.tips.includes(tip._id))
						{
							console.log(tip)
						} 
		
					})
				}
				else if (user.techniques.length > 0) {
					kit.techniques.map((technique , index) => { 
						if (user.techniques.includes(technique._id))
						{
							console.log(technique) 
						} 
					})
				}

				else if (user.products.length > 0) {
					kit.products.map((product , index) => { 
						if (user.products.includes(product._id))
						{
							console.log(product)
						} 
					})
				}


            
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
        const {kit} = this.state || {};
        
        console.log(this.state);

        if (kit === undefined ) {
            return(<div>...</div>)
        } else {
            return (
                <div className="product-kit-page">
                    {this.getUserList()}
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