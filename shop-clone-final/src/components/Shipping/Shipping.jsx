import { Button } from "antd";
import "../Address/Address.css"
import {
  LeftOutlined,
  DollarCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "./Shipping.css";
import "antd/dist/antd.css";
import { Link, Navigate } from "react-router-dom";
import { ShippingDetail } from "../ShippingDetail/ShippingDetail";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";

export const Shipping = () => {
  const { cart } = useContext(CartContext);
  //   const [cartTotal, setCartTotal] = useState(0);
  let arr = cart;
  console.log(arr)

  var total = 0;
  for (let t = 0; t < arr.length; t++) {
    let k = 0
    if (arr[t] === NaN) {
      k = 0
    }
    else {
      k = +arr[t].price
    }
    total += k
  }

  //   setCartTotal(total);

  return (
    <div
      style={{
        // border: "1px solid black",
        padding: "50px",
      }}
    >
      <p style={{ fontSize: "30px", fontWeight: "bold", color: "#414467" }}>
        Checkout
      </p>
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="ship" style={{ backgroundColor: "#f0f1f7" }}>
          Address
        </div>
        <div
          className="ship"
          style={{ backgroundColor: "#545871", color: "white" }}
        >
          Shipping{" "}
        </div>
        <div className="ship" style={{ backgroundColor: "#f0f1f7" }}>
          Payment
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid rgb(224, 226, 224)",
          marginTop: "10px",
          display: "flex",
          paddingTop: "10px",
        }}
      >
        {/* ---------------------------------left div - product box--------------------------------- */}
        <div className="leftShip">
          {arr.map((e) => (
            <ShippingDetail prod={e} />
          ))}
        </div>

        {/* ---------------------------------right div - Shipping box--------------------------------- */}

        <div className="rightShip">
          <p style={{ fontWeight: "bold", fontSize: "17px" }}>Shipping: </p>
          <div className="aDDress">
            Tejaswini Prabhakar Chandu Master Colony Ward No 4 At Post Tahsil
            Aheri District Gadchiroli Aheri, AK United States, 99501 Phone:
            913-098-0716{" "}
            <a href="" className="Atags">
              Change
            </a>
          </div>
          <p
            style={{ color: "#545871", fontSize: "22px", fontWeight: "bolder" }}
          >
            Order Summary
          </p>
          <div className="suMMary">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Item Subtotal:</span>
              <span>$ {total}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Tax Total:</span>
              <span>$0.00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Shipping (multiple merchants):</span>
              <span>FREE</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              fontSize: "16px",
              borderTop: "1px ridge #dfe1e8",
              color: "#2e2f43",
            }}
          >
            <span>Order Total:</span>
            <span>${total}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "17px",
              margin: "10px 0px 5px",
            }}
          >
            <div>
              <DollarCircleOutlined
                style={{
                  color: "white",
                  backgroundColor: "#52c1ba",
                  borderRadius: "50px",
                }}
              ></DollarCircleOutlined>
              Cashback earned on this order:
            </div>

            <span>$0.00</span>
          </div>
          <div style={{ backgroundColor: "#007d76", height: "5px" }}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <a href="">
              <b>
                <LeftOutlined />
                Address
              </b>
            </a>
            <Link to="/payment2">
              <button type="primary" id = "submit" style={{width: "100%", cursor: "pointer"}}>
                Continue Checkout
              </button>
            </Link>
          </div>
          <div className="fdback">
            Let us know how we are doing{" "}
            <a href="" className="Atags">
              Send Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
