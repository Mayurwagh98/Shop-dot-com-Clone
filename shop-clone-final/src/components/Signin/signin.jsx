import { Button } from "antd";
import "./signin.css"
import axios from "axios";
import { useState } from "react";
import { Typography } from "antd";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
export const Signin = () => {
  const {Auth,handleAuth}=useContext(AuthContext)
  // console.log(handleAuth)
  const navigate=useNavigate()
  const [user, setuser] = useState({});

  function handle(e) {
    e.preventDefault();
    // console.log(user);
    console.log("hello")

    axios
      .post("https://shop-clone-api.herokuapp.com/login", { ...user })
      .then(function (response) {
        console.log(response)
        let Authtoken=response.data.token
        localStorage.setItem("Authtoken",JSON.stringify(Authtoken))
        localStorage.setItem("user",JSON.stringify(response.data.user))
        handleAuth()
        console.log(Auth)
       // window. location. reload()
         navigate(-1,{replace:true})
        //alert(response.data.meaasge)
      })
      .catch(function (error) {
        console.log(error);
        alert("Email or Password wrong");

      });
  }

  const getInputData = (e) => {
     
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="Sign_main_div">
        <div className="signin_div">
          <Title level={1}>Log in</Title>

          <form onSubmit={handle}>
            <p className="address">Enter address:</p>
            <input
              name="email"
              onChange={getInputData}
              type="email"
              placeholder="yourname@example.com"
              className="email"
              style={{border: "1px solid black", marginTop: "-5px",marginLef: "-5px"}}
            />
            <p className="pass_p">Password:</p>
            <input
              name="password"
              onChange={getInputData}
              type="password"
              placeholder="Please enter your password"
              className="password"
            />
            <p className="forgotpass">Forgot your password?</p>
            {/* <Link to= "/"></Link> */}
              <input className="singin_button"type="submit" value="Sign in"></input>
            {/* <Button className="singin_button" value="Sign in"  type="primary submit">
              Sign in
            </Button> */}
          </form>
        </div>
        <div className="signup_div">
          <p className="heading_donthaveacc">Don't have an account?</p>
          <p className="paragraph">
            With a SHOP.COM account, you can enjoy the following benefits: up to
            50%{" "}
            <span>
              <img
                src="https://img.shop.com/Image/resources/images/cashback-icon.svg"
                alt=""
                style={{ width: "15px" }}
              />
            </span>
            Cashback on eligible purchases, redeem discount coupons, order
            status and history, saved payment options and addresses, exclusive
            emails and more.
          </p>
          <Link to = "/signup"className="createButton" >Create your new account</Link>
        </div>
      </div>
    </>
  );
};
