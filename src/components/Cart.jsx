import React, { useState } from "react";
import { Button, Drawer, InputNumber, Space, Divider } from "antd";
const Cart = ({ open, setOpen, cartItems }) => {
  //   const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const [quantity, setQuantity] = useState(1);
  const onChange = (value) => {
    if(value <= 0 || Number.isNaN(value)){
        setQuantity(1)
    }
    setQuantity(value);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        title="Cart Items"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={<Space></Space>}
      >
        {cartItems.map((item, key) => (
        <div style={{display:"flex", flexDirection:"column" }}>
        <div style={{display:"flex", width:"100%", justifyContent:"space-between", alignItems:"center"}}>
        <img src={item.image} style={{width:"60px", height:"50px", marginRight:"20px"}}/>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"start"}}>
          <h4 style={{margin:"0px"}}>{item?.name}</h4>
          {/* <p>{item?.description}</p> */}
          <strong style={{color:"red", marginTop:"10px"}}>Rs: {item?.price}</strong>
      </div>
      <div style={{display:"flex", flexDirection:"column"}}><p>Quantity</p> <InputNumber min={1}  defaultValue={item?.quantity} onChange={onChange}  /></div>
         
      </div>
      <Divider/>
      </div>
        ))}
        <div >
            <h3>Order Summay</h3>
            <div style={{display:"flex", justifyContent:"space-between", padding: "10px" }}>
                <strong>Total Items</strong>     
                <strong>3</strong>              
            </div>

            <div style={{display:"flex", justifyContent:"space-between", padding: "10px" }}>
                <strong>Total</strong>     
                <strong style={{color:"green"}}>Rs: 2000</strong>              
            </div>

        </div>
      </Drawer>
    </>
  );
};
export default Cart;
