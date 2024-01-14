import React, { useState, useEffect } from "react";
import { Button, Drawer, InputNumber, Space, Divider } from "antd";
const Cart = ({ open, setOpen, cartItems, setCartItems }) => {
  //   const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");

  function updateOrAddToCart(value, item) {
    const _cartItems = [...cartItems];
    const index = _cartItems.findIndex((obj) => obj._id === value);
      const quantity = item.quantity !== undefined ? item.quantity : 1;
      _cartItems[index].quantity = quantity;
      setCartItems(_cartItems);
    
  }
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {

  }, [cartItems]);

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
          <div key={key} style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                style={{ width: "60px", height: "50px", marginRight: "20px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                }}
              >
                <h4 style={{ margin: "0px" }}>{item?.name}</h4>
                {/* <p>{item?.description}</p> */}
                <strong style={{ color: "red", marginTop: "10px" }}>
                  Rs: {item?.price * item.quantity}
                </strong>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>Quantity</p>
                <InputNumber
                  min={1}
                  defaultValue={item.quantity}
                  value={item.quantity}
                  onChange={(val)=>{
                    item.quantity = val
                    updateOrAddToCart( item._id, item)
                  }}
                />
              </div>
            </div>
            <Divider />
          </div>
        ))}
        <div>
          <h3>Order Summay</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <strong>Total Items</strong>
            <strong>{cartItems.reduce((prev, current) => prev + current.quantity, 0)}</strong>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <strong>Total</strong>
            <strong style={{ color: "green" }}>Rs: {cartItems.reduce((prev, current) => prev + current.price * current.quantity, 0)}</strong>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default Cart;
