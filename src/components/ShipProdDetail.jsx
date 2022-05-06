import "./ShipProdDetail.css";
import "./Shipping.css";
import {
  LeftOutlined,
  DollarCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

export const ShipProdDetail = ({prod}) => {
  console.log("item : ", prod);


  return (
    
    <div style={{ borderBottom: "1px solid #dfe1e8", marginBottom:"20px"}}>
        {/* --------------------------congratulations------------------------ */}
      <div style={{backgroundColor:"#f0f1f7", padding:"10px"}}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbZY1NcPlK7GqIbh3vpB0Om37vuiMnyUuGw&usqp=CAU"
          style={{ height: "20px" }}
          alt="car clipart"
        />
        <b style={{ fontSize: "12px" }}>
          Congratulations! Your order qualifies for free shipping. Learn more
        </b>{" "}
        <a href="">
          <InfoCircleOutlined style={{ color: "#52c1ba" }}></InfoCircleOutlined>
        </a>
      </div>



      <div className="prodDeTaiL">
            {/* ---------------------------------Image-------------------------------- */}
          
            <img className="imgDiv" src={prod.image} alt="" />

            {/* ---------------------------------left-------------------------------- */}
          <div className="lefT">
              <p className="ProD_tiTle">{prod.title}</p>
              <p className="ProD_PricE">${prod.price}</p>
              <p className="ProD_caShback">+ ${prod.cashback} <DollarCircleOutlined style={{color:"white", backgroundColor: "#52c1ba", borderRadius:"50px"}}></DollarCircleOutlined>Cashback</p>
              <p className="ProD_ID">Item#: {prod.id}</p>
              <p>Quantity: <input style={{width:"50px", border:"1px solid grey", borderRadius:"5px"}} type="number"/></p>
          </div>
          
          
             {/*------------------------------ right --------------------------*/}
          <div className="righT">
              <div style={{display:"flex", justifyContent:"space-between" }}>
                  <span>Item Subtotal:</span>
                  <b>$ <span>0.00</span></b>
              </div>
              <div style={{display:"flex", justifyContent:"space-between" }}>
                  <span>Tax:</span>
                  <b>$ <span>0.00</span></b>
              </div>
              <div style={{display:"flex", justifyContent:"space-between" }}>
                  <span>Shipping:</span>
                  <b>$ <span>0.00</span></b>
              </div>
              <div style={{display:"flex", justifyContent:"space-between" }}>
                  <span>Store Total:</span>
                  <b>$ <span>0.00</span></b>
              </div>
          </div>
      </div>
    </div>
  );
};
