import React, { Component } from 'react';
import KitServices from '../../services/KitServices';
import { Input } from 'antd';
const { TextArea } = Input;

class TechniqueCreate extends Component {

    state = {
        techniques: [],
        technique: {
            influencer: "",
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
        const {description, header} = this.state.data;

        const descriptions = description.split(',') ;
        
        let subheading = {
            header,
            descriptions
        }

        let array = this.state.technique.subheading;
        let newArray = array.push(subheading);

       

        if(subheading !== "") {
          this.setState({ techniques:{subheading:newArray}})
        }
      };

      addTechniques = () => {
        const { technique } = this.state;

        KitServices.createTechnique({
          technique: {
            influencer: technique.influencer,
            title: technique.title,
            subheading: technique.subheading,
            recommendation: technique.recommendation
          }
        })
        .then((res) => this.setState({ created: true, technique: res.data}))
        .catch((e) => console.log(e))
      }


    render() {

        return (
            <div>
                <Input name="influencer" type="text" placeholder="Add influencer ID" onChange={this.onChange} />
                <TextArea name="title" rows={4} type="text" placeholder="Add technique title" onChange={this.onChange} />
                <div className="technique-form-inputs">
                  <div>
                  <TextArea name="header" rows={4} type="text" placeholder="Add technique header" onChange={this.handleChange} />
                  <TextArea name="description" rows={4} type="text" placeholder="Add technique description" onChange={this.handleChange} />
                  </div>
                  <button onClick={this.fixTechniques}>Add more subheadings</button> 
                </div>
                <button onClick={this.addTechniques}>Send technique</button>  

            </div>
        );
    }
}

export default TechniqueCreate;