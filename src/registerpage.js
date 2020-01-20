import React from 'react';
import { render } from '@testing-library/react';


class registerapp extends React.Component {

    constructor(props) {
      super(props);
     
      this.state={
        firstname:'',
        lastname:'',
        username:'',
         password:'',
       
      }
  
    }
  
    handlefirstnameChange =(event) => {
      this.setState({
        firstname:event.target.value
      })
    }
  
  
    handlelastnameChange =(event) => {
      this.setState({
        lastname:event.target.value
      })
    }
  
    handleusernameChange =(event) => {
      this.setState({
        username:event.target.value
      })
    }
  
  
    handlepasswordChange =(event) => {
      this.setState({
        password:event.target.value
      })
    }
  
  
    handleSubmit = event => {
        event.preventDefault();
    }
  
    render() {
      return (
  
  
        <div className="App">
  
  
        <div className="App-header">
        
  
        
        <form onSubmit={this.handleSubmit}>
        
         
         
            <input type="text"
             className="wrapper"
             value={this.state.firstname}
             onChange={this.handlefirstnameChange} 
           />
        
        
            <input type="text"
             className="wrapper"
             placeholder="Lastname"
             value={this.state.lastname}
             onChange={this.handlelastnameChange} 
              />
       
        
            <input type="text" 
             className="wrapper"
            value={this.state.username}
             onChange={this.handleusernameChange} 
            
            />
         
             <input type="text" 
             className="wrapper" 
             value={this.state.password}
             onChange={this.handlepasswordChange} 
        
        />
         <input type="submit" className="button" value="Add"  onClick={handleSubmit}/>
     
  </form>
        </div>
        </div>
       
      );
    }
  }
  export default registerapp;
  


