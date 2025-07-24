import {useState} from 'react';

import './App.css';

function App() {
  const[value, setvalue ]= useState({
    email: "",
    password: ""


    });
    const  handleChanges =(e) => { 
      setvalue({...value,[e.terget.name]:[e.target.value]});
    }
    const handlesubmit =(e)=>{
      e.preventDefult("");
      console.log("form submit", value );
    }

  return (
    <div className="container">
        <div className="app">
        <h1>welcome back to iNotebook</h1>
        <p>Are you ready to access our Notebook?</p>
        </div>
        <div className="form-container"> 
        <form onSubmit={handlesubmit} >
          <div className="form-group">
            <label htmlFor="name">Email Address: </label> 
          <input type="text" placeholder="Enter your email" onChange={(e) => handleChanges(e) } />
          </div>
          <div className="Form-group1">
            <label id="password">Password:</label>
            <input type="text" placeholder="Enter your password" onChange={(e)=> handleChanges(e)} />
          </div>

<div className="form-group3">
            <label htmlFor="remember">Remember me</label>
            <input type="checkbox" id="remember"onChange={(e)=> handleChanges(e)} />
          </div>
          <input type="submit" className="btn"  onClick={handlesubmit}/>Login
                         
  <div/>
          
        </form>
        </div>
        
    </div>
  );
}

export default App;
