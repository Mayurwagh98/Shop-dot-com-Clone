import React from 'react';
import { useState, useEffect, useContext } from "react"
import { Button } from "antd";
import { useNavigate } from 'react-router-dom';
import "./Payment2.css";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/cartContext";


export const CartInfo = () => {



    const { cart } = useContext(CartContext);

    //   const [cartTotal, setCartTotal] = useState(0);

    let arr = cart;
    console.log(arr)

    var total = 0;
    for (let t = 0; t < arr.length; t++) {
        let k = 0
        if (arr[t] == NaN) {
            k = 0
        }
        else {
            k = +arr[t].price
        }
        total += k
    }

    // const [address,setaddress] = useState([])
    // useEffect(()=>{
    //     getData()
    // },[])
    // getData()
    async function getData() {
        try {
            let Authtoken = JSON.parse(localStorage.getItem("Authtoken"));
            console.log(Authtoken)

            let data = await fetch("https://shop-clone-api.herokuapp.com/addresses", {
                method: "GET",

                headers: {
                    Authorization: `Bearer ${Authtoken}`,
                    "Content-Type": "application/json",
                },
            });
            data = await data.json()
            console.log(data)
            // setaddress([...data])

        } catch (error) {
            console.log(error);
        }

    }


    // console.log(address,"murli");
    // console.log(data)

    const nav = useNavigate()

    const GotoCart = () => {
        nav("/payment1")
    }


    return (
        <div className='paymentmaindiv'>
            <div className="checkout_heading">
                <div><h1>Checkout</h1></div>
                <div className="order_total">Order total</div>
            </div>
            <hr></hr>
            <p style={{ width: "50%", marginTop: "15px" }}>Select payment method</p>
            <div className="main_div">
                <div className='left-divmain'>
                    <div className="left_div">
                        <div className="payment_method1" style={{ display: "flex", height: "70px" }}>
                            {/* <input type="radio"  onClick={()=>(GotoCart())} />
                    <p style={{width: "40%", display: "block", border: "1px solid red"}}>Enter Payment method</p>
                    <img src="https://img.shop.com/Image/local/images/cc/amex.jpg" alt="" />
                    <img src="https://img.shop.com/Image/local/images/cc/discover.jpg" alt="" />
                    <img src="https://img.shop.com/Image/local/images/cc/mastercard.png" alt="" />
                    <img src="https://img.shop.com/Image/local/images/cc/visa.jpg" alt="" /> */}
                            {/* <input type="radio"  onClick={()=>(GotoCart())} style = {{width: "20px", marginLeft: "0%"}} /> */}
                            {/* <p>Enter Payment Method</p> */}
                            <div style={{ height: "25px", marginTop: "10px", marginLeft: "5px"}}>
                                <input type="radio"  onClick={()=>(GotoCart())} style={{ width: "20px", height: "20px" }} />
                            </div>

                            <div style={{ display: "flex", marginLeft: "3%" }}>
                                <p style={{ fontSize: "19px" }}>Enter Payment method</p>
                                <img src="https://img.shop.com/Image/local/images/cc/amex.jpg" alt="" />
                                <img src="https://img.shop.com/Image/local/images/cc/discover.jpg" alt="" />
                                <img src="https://img.shop.com/Image/local/images/cc/mastercard.png" alt="" />
                                <img src="https://img.shop.com/Image/local/images/cc/visa.jpg" alt="" />
                            </div>


                        </div>
                        <hr></hr>
                        <div className="payment_method3" style={{ marginLeft: "50px", height: "80px" }}>

                            <img src="https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg" alt="" />
                        </div>
                        <hr />
                        <div className="payment_method3" style={{ marginLeft: "50px", height: "80px" }}>
                            <img src="https://img.shop.com/Image/local/images/cc/SezzlePaymentBtn_Small-purple.svg" alt="" style={{ width: "250px" }} />
                        </div>
                        <hr />
                        <div className="payment_method4" style={{ marginLeft: "50px", height: "80px" }}>
                            <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png" alt="" style={{ width: "250px" }} />
                        </div>
                        <hr />
                        <div className="payment_method5" style={{ marginLeft: "50px", height: "80px" }}>
                            <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/ppcredit_MD_BNPOT_1x.png" alt="" style={{ width: "250px" }} />
                        </div>
                        <hr />
                        <div className="payment_method6" style={{ marginLeft: "28px", height: "80px" }}>
                            <img src="https://src.mastercard.com/assets/img/btn/src_chk_btn_147x034px.svg?locale=en_us&paymentmethod=master,visa,discover,amex&checkoutid=a4a6w4v6h7cg0iaijxn0j1iaoelnus5936" alt="" style={{ width: "250px", marginLeft: "30px" }} />
                        </div>


                    </div>

                    <div>

                    </div>

                    <div className="shippin_address" style={{ display: "flex" }}>


                        {/* address1: "Chandu Master Colony"
city: "Aheri"
createdAt: "2022-05-07T11:37:06.017Z"
firstName: "Tejaswini"
lastName: "Shreeramwar"
phone: "913-098-0716"
postal: "442705"
updatedAt: "2022-05-07T11:37:06.017Z"
userId: "627657f9c6f3dcdc37f5dd8f"
_id: "627659e2c6f3dcdc37f5ddb5" */}

                        {/* <div className='shippingadr'>
   <h2>Shipping Address</h2>
    <h3>{data[0].firstName} {data[0].lastName}</h3>
    <p>{address[0].address1}</p>
    <p>{address[0].city}</p>
    <p>{address[0].phone}</p>
    <a href="">Change</a>
</div> */}
                        {/* <div className="coupon_card">
                            <h3>Coupon/Gift Card</h3>
                            <div>
                                <p>Coupon</p>
                                <input type="text" placeholder="Coupon code" />
                                <Button className="apply_button" style={{width: "50%"}}>Apply</Button>
                            </div>
                            <div >
                                <p>Gift Card</p>
                                <input type="number" placeholder="Gift card number" />
                                <p>PIN:</p>
                                <input type="number" placeholder="PIN" />
                                <Button>Apply</Button>
                            </div>
                        </div> */}
                    </div>
                </div>

                <hr style={{ marginTop: "15px" }}></hr>

                <div className='rightdivmain'>

                    <h3>Order Summary</h3>
                    <hr></hr>

                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p>Items order:</p>
                            <p>$ {total}</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p>Tax Total:</p>
                            <p>$ 0.00</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                            <p>Shipping</p>
                            <p>FREE</p>
                        </div>
                        <hr />
                        <div className="order">
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <h3 >Order Total:</h3>
                                <p style={{ float: "left" }}> $ {total}</p>
                            </div>
                            <div style={{ display: "flex" }}>
                                {/* <div> */}
                                <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt="" style={{ width: "18px" }} />
                                {/* </div> */}

                                <div style={{ display: "flex",}}>
                                    <div style={{ width: "200px"}}>
                                        <p>Cashback earned on this order:</p>
                                    </div>
                                    <div style={{marginLeft: "330px"}}>
                                        <span className='sp1'>$56</span>
                                    </div>

                                </div>

                            </div>
                            <hr className='hrboldblue'></hr>
                        </div>

                        <div className="text_alerts" style={{ backgroundColor: "grey", padding: "10px", marginBottom: "5px" }}>
                            <div >
                                <input type="checkbox" style={{ width: "25px", height: "25px" }} />
                                <label style={{ fontSize: "20px" }}>&nbsp;Get text alerts for this order</label>
                            </div>

                            <p>Mobile number</p>
                            <input style={{ width: "96%", padding: "10px" }} type="number" placeholder="Please enter your 10 digit phone number i.e (999 999 9999)" />
                            <p>Message and data rates can be apply</p>
                        </div>

                        <div style={{ justifyContent: "space-between", display: "flex", marginBottom: "10px" }}>
                            <a href="" style={{ textDecoration: "underline", color: "black" }}>Shipping</a>
                            <Link to="/payment1"> <Button className="place_order" style={{ width: "85%", height: "40px", marginRight: "50px" }} >
                                <p style={{ color: "white", padding: "3px" }}>Place Order</p></Button></Link>
                        </div>

                        <hr />

                        <div style={{ backgroundColor: "lightblue", height: "60px" }}>
                            <p>Let us know how we are doing
                                <a style={{ color: "black", textDecoration: "underline" }}>Send Feedback</a>
                            </p>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    )
}
