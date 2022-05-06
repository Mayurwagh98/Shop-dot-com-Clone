import { Button } from "antd";
import "./signin.css"
import axios from "axios";
import { useState } from "react";
import { Typography } from "antd";
const { Title } = Typography;
export const Singin = () => {
  const [user, setuser] = useState({});

  function handle(e) {
    e.preventDefault();
    console.log(user);

    axios
      .post("http://localhost:5700/login", { ...user })
      .then(function (response) {
        console.log(response);
        localStorage.setItem("token",JSON.stringify(response.data.token))
        localStorage.setItem("userdetails",JSON.stringify(response.data.user))
        //alert(response.data.meaasge)
      })
      .catch(function (error) {
        console.log(error);
        alert("Email or Password wrong");
      });
  }

  const getInputData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="main_div">
        <div className="signin_div">
          <Title level={1}>Sing in</Title>

          <form onSubmit={handle}>
            <p className="address">Enter address:</p>
            <input
              name="email"
              onChange={getInputData}
              type="email"
              placeholder="yourname@example.com"
              className="email"
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
            <input type="submit" value="Sign in"></input>
            <Button className="singin_button" type="primary">
              Sing in
            </Button>
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
          <Button className="createButton">Create your new account</Button>
        </div>
      </div>
    </>
  );
};
