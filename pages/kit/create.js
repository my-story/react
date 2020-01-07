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
            products: [],
            // tips: [],
            role: "",
            kitCreate: false,
        }
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

      onSubmit = () => {
        let { kit } = this.state
        if (kit.influencer.length === 0||kit.products === 0) {
          toastr.error("Please complete all required fields")
          return
        } else {
          this.addBackend()
        }
      }

      addBackend () {
        KitServices.kitCreate(this.state.kit)
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
            <div>
                 <Input name="influencer" placeholder="Please enter influencer id"  onChange={this.onChange} />
                 <TextArea name="products" rows={4} type="text" placeholder="Add products id separated [space]" onChange={this.onChangeProduct} />
                 {/* <TextArea name="tips" rows={4} type="text" placeholder="Add Cloudinary images url separated by a space" onChange={this.onChangeImage} /> */}
                 <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
    
}

export default KitCreate