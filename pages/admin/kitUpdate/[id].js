import React, {Component} from 'react';
import KitServices from '../../../services/KitServices';
import UserContext from '../../../components/contexts/UserContext';
import { Input, Select } from 'antd';
import * as toastr from 'toastr';
const { TextArea } = Input;


const OPTIONS = ["Addiction", "Sleep", "Spirituality"];
//Kit/create = route. Needs Authentication 
class KitUpdate extends Component {
    state = {
        kit : {
          title: "",
          influencer: false,
          products: [],
          product: [],
          comment: [],
          tips: [],
          header: [],
          description: [],
          techniques: [],
          techniqueTitle: "",
          techniqueHeader: [],
          techniqueDescription: [],
          category: "",
          role: ""
        },
        selectedItems: [],
        kitOld: {},
        kitUpdate: false,
        fixedArrays: false

    }
    static getInitialProps({ query: { id } }) {
      return { id };
    }

    static contextType = UserContext;

    componentDidMount = () => {
      KitServices.getKitAdmin(this.props.id)
        .then((kit) => this.setState({
          kit: {
            title: kit.title,
            influencer: kit.influencer,
            products: kit.products,
            tips: kit.tips,
            techniques: kit.techniques,
            category: kit.category,
            _id: kit._id,
          }
        }))
           
        .catch((err) => console.log(err))
    }

    onChange = (e) => {
        let { kit } = this.state;
        kit[e.target.name] = e.target.value;
        this.setState( {kit} )
      };
        
      handleChange = (selectedItems) => {
        this.setState({
          kit : {
            ...this.state.kit,
            category: selectedItems

          }
        })
      };

  
      fixComments = () => {
        const {kit} = this.state;
        const {product, comment} = kit;
      
        let object = {
          product,
          comment
        }

        let array = this.state.kit.products;
        let newArray = array.push(object);

        if(object !== "") {
          this.setState({products: newArray})
        }
        };    
        
      fixTips= () => {
        const {kit} = this.state;
        const {header, description} = this.state.kit;

        let object = {
          header, 
          description
        }
        
        let array = this.state.kit.tips;
        let newArray = array.push(object);

        if(object !== ""){
          this.setState({tips: newArray})
          // console.log(object, this.state.kit.products)
        }

      };
      
      fixTechniques = () => {
        const {kit} = this.state;
        const {techniqueHeader, techniqueDescription, techniqueTitle} = this.state.kit;

        let header = techniqueHeader.split(" , ");
        let description = techniqueDescription.split(" , ");
        let title = techniqueTitle;

        let object = {
          title,
          header, 
          description
        }

        let array = this.state.kit.techniques;
        let newArray = array.push(object);

        if(object !== "") {
          this.setState({techniques: newArray})
          // console.log(object, this.state.kit.products)
        }
      };

      onSubmit = () => {
        let { kit } = this.state;
        if (kit === false) {
          toastr.error("Please complete all required fields")
          return
        } else {
          this.addBackend();
          // console.log("ready for backend")
        }
      };

      addBackend = () => {
        let {kit} = this.state;
        const id = kit._id;

        KitServices.updateKit({
          kit: {
            title: kit.title,
            influencer: kit.influencer,
            products: kit.products,
            tips: kit.tips,
            techniques: kit.techniques,
            category: kit.category[0]
          }
        }, id)
        // console.log(kit)
          .then((k)=>{

            // this.setState({
            //   kit: kit,
            //   kitUpdate:true
            // })
            console.log(k)
          })
          .catch((e)=>console.log(e))
      };
      
      
      
    render() {
      const { kit, kitOld, selectedItems } = this.state;
      const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
      console.log(this.state);

      if (this.state.kit) {
        return (
          <div className="create-survival-kit-div">
               <Input name="title" placeholder={kitOld.title}  onChange={this.onChange} />
               <Input name="influencer" placeholder={kit.influencer} onChange={this.onChange} />
               <TextArea name="product" rows={4} type="text" placeholder="Add product ID" onChange={this.onChange} />
               <TextArea name="comment" rows={4} type="text" placeholder="Add product" onChange={this.onChange} />
               <button onClick={this.fixComments}> Add products </button>
               <TextArea name="header" rows={4} type="text" placeholder="Add tip header" onChange={this.onChange} />
               <TextArea name="description" rows={4} type="text" placeholder="Add tip description" onChange={this.onChange} />
               <button onClick={this.fixTips}> Add tips </button>                 
               <TextArea name="techniqueHeader" rows={4} type="text" placeholder="Add technique header" onChange={this.onChange} />
               <TextArea name="techniqueDescription" rows={4} type="text" placeholder="Add technique description" onChange={this.onChange} />
               <button onClick={this.fixTechniques}> Add techniques </button>                                  
               <Input name="category" placeholder="Please enter category"  onChange={this.onChange} />
              
               <Select
              mode="multiple"
              placeholder="This is the Category. ADMIN can create new categories"
              name="category"
              onChange={this.handleChange}
              style={{ width: '100%' }}>
              {filteredOptions.map(item => (
                <Select.Option key={item} value={item}>
                  {item}
                </Select.Option>
              ))}
            </Select>

               {/* <TextArea name="tips" rows={4} type="text" placeholder="Add Cloudinary images url separated by a space" onChange={this.onChangeImage} /> */}
               <button onClick={this.saveState}>Save State</button>                 
               <button onClick={this.onSubmit}>Submit</button>
          </div>
      )
      } else {
        return(<div>...</div>)
      }
        
    }
    
}

export default KitUpdate;