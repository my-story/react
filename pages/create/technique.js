import React, { Component } from 'react';
import KitServices from '../../services/KitServices';
import { Input } from 'antd';
const { TextArea } = Input;

class TechniqueCreate extends Component {

    state = {
        techniques: [],
        technique: {
            influencer: this.props.influencer._id,
            title: "",
            subheading : [{
            }],
            recommendation: "",
        },
        data: {
          header: "",
          description: [],
        },
        techniqueDescription: [],
    }
    
    componentDidMount() {
      const {influencer} = this.state.technique;

      this.setState({influencer: this.props.influencer._id})
    };

 

    handleChange = (e) => {
      let { data } = this.state
      data[e.target.name] = e.target.value
      this.setState({ data });
    };

    onChange = (e) => {
        let { technique } = this.state;
        technique[e.target.name] = e.target.value
        this.setState( {technique} )
      };

    fixTechniques = () => {
        // const {technique} = this.state;
        const {recommendation, title} = this.state;
        const {description, header} = this.state.data;

        // if (/[,\-]/.test(description) === true) { 
            const descriptions = description.split(',') ;
        // } else {
        //     const descriptions = description;
        // }
        
        

        let subheading = {
          // title,
            header,
            descriptions
        
          // recommendation
        }

        let array = this.state.technique.subheading;
        let newArray = array.push(subheading);

       

        if(subheading !== "") {
          this.setState({ techniques:{subheading:newArray}})
        }
      };

      // addTechniques = () => {
      //   const { technique } = this.state;
        
      //   let newSubheading = technique.subheading.splice(0,1);


      //   KitServices.createTechnique({
      //     technique: {
      //       title: technique.title,
      //       subheading: newSubheading,
      //       // recommendation: 

      //     }
      //   })
      //   .then((res) => this.setState({ created: true, technique: res.data}))
      //   .catch((e) => console.log(e))
      // }

      sendDataBack = () => {
        // const { technique } = this.state;
        const initialState = {
          influencer: undefined,
          title: "",
          subheading : [{
          }],
          recommendation: "",
        };

        this.props.getData(this.state.technique)
        this.setState({technique: initialState})
      };

    render() {
      console.log(this.state);

        return (
            <div>
                <TextArea name="title" rows={4} type="text" placeholder="Add technique title" onChange={this.onChange} />
                <div className="technique-form-inputs">
                  <div>
                  <TextArea name="header" rows={4} type="text" placeholder="Add technique header" onChange={this.handleChange} />
                  <TextArea name="description" rows={4} type="text" placeholder="Add technique description" onChange={this.handleChange} />
                  </div>
                  <button onClick={this.fixTechniques}>Add more subheadings</button> 
                </div>
                <button onClick={this.sendDataBack}>Send technique</button>  

                             
                
            </div>
        );
    }
}

export default TechniqueCreate;