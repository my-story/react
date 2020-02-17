import React, { Component } from 'react';
import KitServices from '../../services/KitServices';
import { Input } from 'antd';
const { TextArea } = Input;

class TechniqueCreate extends Component {

    state = {
        techniques: [],
        technique: {
            title: "",
            subheading : [{
                // header: "",
                // description: [],
            }],
            recommendation: "",
        },
        techniqueDescription: [],
    }

    sendDataBack(){
      this.props.getData()
    };

    onChange = (e) => {
        let { technique } = this.state;
        technique[e.target.name] = e.target.value
        this.setState( {technique} )
      };

    fixTechniques = () => {
        const {technique} = this.state;
        const {recommendation, title, header, description} = this.state.technique;

        let descriptions = description.split(" , ");
        

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

      addTechniques = () => {
        const { technique } = this.state.technique;
        
        KitServices.createTechnique(technique)
      }

    render() {
      console.log(this.state);

        return (
            <div>
                <TextArea name="title" rows={4} type="text" placeholder="Add technique title" onChange={this.onChange} />
                <div className="technique-form-inputs">
                  <div>
                  <TextArea name="header" rows={4} type="text" placeholder="Add technique header" onChange={this.onChange} />
                  <TextArea name="description" rows={4} type="text" placeholder="Add technique description" onChange={this.onChange} />
                  </div>
                  <button onClick={this.fixTechniques}>Add techniques</button>   
                </div>
                             
                
            </div>
        );
    }
}

export default TechniqueCreate;