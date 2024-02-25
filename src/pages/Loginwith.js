import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Modal.css";

function Loginwith({ setOpenModal }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [passwordHash, setPasswordHash] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handlePasswordHashChange = (value) => {
    setPasswordHash(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleLogin = () => {
    const data = {
      PasswordHash: passwordHash,
      Email: email,
    };

    const url = "http://localhost:57188/api/Test";

    axios
      .post(url, data)
      .then((result) => {
        alert(result.data);
        if (result.data === "Admin is Invalid") {
          
          navigate(error);
        } else {
          setLoggedIn(true);
          setError(null);
          
          navigate("/crud");
        }
      })
      .catch((error) => {
        setError("Invalid email or password");
        console.error("Login error:", error);
        setLoggedIn(false);
      });
  };

  const handleCancel = () => {
    // Cancel butonuna basıldığında index sayfasına yönlendirme yap
    navigate("/");
  };

return (
    <Fragment>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => {
                handleCancel(); // handleCancel fonksiyonunu çağır
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
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <label className="labelx">Password</label>
            <input
              type="text"
              id="txtPasswordHash"
              placeholder="Enter Password"
              onChange={(e) => handlePasswordHashChange(e.target.value)}
            />
            <br />
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          </div>
          <div className="footer">
            <button onClick={() => handleLogin()}>Login</button>
            {isLoggedIn && !error && <Link to="/crud">Admin</Link>}
            {!isLoggedIn && !error && <div></div>}
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
export default Loginwith;