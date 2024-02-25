import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Modal.css";

function Login() {  
  const navigate = useNavigate();

  const handleCancel = () => {
    
    navigate("/");
  };
  const handleLogin = () => {
    
    navigate("/crud");
  };
return (
    <Fragment>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => {
                handleCancel(); 
              }}>X</button>
          </div>
          <div className="title">
            <h1>Admin Login</h1>
          </div>
          <div className="body">
          <div className="row">
            <label className="labelx">Admin E-mail</label>
            <input
              type="text"
              id="txtEmail"
              placeholder="Enter E-mail"              
            />
            <label className="labelx">Password</label>
            <input
              type="text"
              id="txtPasswordHash"
              placeholder="Enter Password"             
            />
            <br />          
          </div>
          </div>
          <div className="footer">
            <button onClick={() => handleLogin()}>Login</button>           
            <button
              onClick={() => {
                handleCancel(); 
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
  
}
export default Login;