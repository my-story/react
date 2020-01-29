import React, {Component} from 'react';
import KitServices from '../../services/KitServices';
import UserContext from '../../components/contexts/UserContext';
import { Input, Select } from 'antd';
import * as toastr from 'toastr';
const { TextArea } = Input;

//Kit/create = route. Needs Authentication 
class KitCreate extends Component {
    state = {
        kit : {
          influencer: "",
          products: [{
              product: "",
              comment: ""
          }],
          productsArray: [],
          productsComments: [],
          tips: [{
              header: "",
              description: "",
              video: ""
          }],
          tipsArray: [],
          tipsComment: [],
          techniques: [{
              header: "",
              description: "",
              video: ""
          }],
          techniquesArray: [],
          techniquesComment: [],
          category: "",
          role: ""
        },
        kitCreate: false,
        fixedArrays: false

    }
    static contextType = UserContext;
    
    onChange = (e) => {
        let { kit } = this.state;
        kit[e.target.name] = e.target.value
        this.setState( {kit} )
      };

      onChangeProduct = (e) => {
        let { kit } = this.state;
        let value = e.target.value;
        kit[e.target.name] = value.split(' ');
        this.setState( {kit} )
      };

      // completeArrays = () => {
      //   var promise = new Promise( (resolve, reject) => {

        
        
      //     if (name === 'Paul') {
      //      resolve("Promise resolved successfully");
      //     }
      //     else {
      //      reject(Error("Promise rejected"));
      //     }
      //    });
        
      //    let obj = {newName: ''};
        
      //    promise.then( result => {
      //     this.setState({name: result});
      //    }, function(error) {
      //     this.setState({name: error});
      //    });
      // }
      
  
      fixComments = () => {
        const {kit} = this.state;
        const productsArray = this.state;

        kit.productsComments.forEach((c,index) => {
          this.setState(() => {
            kit.products[index] = {
            product: this.state.kit.productsArray[index],
            comment: c
          }})
      })
      };
        
      fixTips= () => {
        const {kit} = this.state;
        const tipsArray = this.state;

        kit.tipsComment.forEach((c,index) => {
          this.setState(() => {
            kit.tips[index] = {
            header: this.state.kit.tipsArray[index],
            description: c
          }})
      })
      };
      fixTechniques = () => {
        const {kit} = this.state;
        const techniquesArray = this.state;

        kit.techniquesComment.forEach((c,index) => {
          this.setState(() => {
            kit.techniques[index] = {
            header: this.state.kit.techniquesArray[index],
            description: c
          }})
      })
      };


  //     fixProducts = () => {
  //       const {kit } = this.state;
  //       const productsArray = this.state.kit;

  // //     // console.log(kit.products.product)
  //         kit.productsArray.forEach((p, index) => {
  //               // this.setState(() => {
  //               //   kit.products[index] = {
                    
  //               //     product: p
  //               //   }

  //               // })
  //           }
  //       )
  // }

  
      onSubmit = () => {
        let { kit } = this.state
        if (kit.influencer.length === 0||kit.products === 0) {
          toastr.error("Please complete all required fields")
          return
        } else if (this.state.kit.products.length !== this.state.kit.productsArray) {
          // this.fixProducts();
          return
        } else {
          // this.addBackend();
          console.log("ready for backend")
        }
      }

      saveState = () => {
        this.fixComments();
        this.fixTips();
        this.fixTechniques();
      }

      addBackend () {
        KitServices.kitCreate({
          influencer: this.state.influencer,
          products:[{

          }]
        })
          .then((kit)=>{
            console.log(kit)
            this.setState({
              kit: kit,
              kitCreate:true
            })
          })
          .catch((e)=>console.log(e))
      }
      
      
    render() {
            console.log(this.state)
            
        return (
            <div className="create-survival-kit-div">
                 <Input name="influencer" placeholder="Please enter influencer id"  onChange={this.onChange} />
                 <TextArea name="productsArray" rows={4} type="text" placeholder="Add products id separated [space]" onChange={this.onChangeProduct} />
                 <TextArea name="productsComments" rows={4} type="text" placeholder="Add product comment [space]" onChange={this.onChangeProduct} />
                 <TextArea name="tipsArray" rows={4} type="text" placeholder="Add tip header [space]" onChange={this.onChangeProduct} />
                 <TextArea name="tipsComment" rows={4} type="text" placeholder="Add tip description [space]" onChange={this.onChangeProduct} />
                 <TextArea name="techniquesArray" rows={4} type="text" placeholder="Add technique header [space]" onChange={this.onChangeProduct} />
                 <TextArea name="techniquesComment" rows={4} type="text" placeholder="Add technique description [space]" onChange={this.onChangeProduct} />
                 {/* <TextArea name="tips" rows={4} type="text" placeholder="Add Cloudinary images url separated by a space" onChange={this.onChangeImage} /> */}
                 <button onClick={this.saveState}>Save State</button>                 
                 <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
    
}

export default KitCreate