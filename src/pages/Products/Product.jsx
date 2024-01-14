import React, { useEffect, useState } from "react";
import { getProducts } from "../../Ations/ProductActin";
import { Col, Card, Row, Button, InputNumber } from "antd";

const Product = ({setCartItems, cartItems}) => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);


function updateOrAddToCart(value, item) {
    const _cartItems = [...cartItems]
  const index = _cartItems.findIndex(obj => obj._id === value);
  if (index !== -1) {
    const quantity = (item.quantity !== undefined)?item.quantity:1
    _cartItems[index].quantity = _cartItems[index].quantity + quantity
    setCartItems(_cartItems)
  } else {
    let _item = {...item}
        _item.quantity = (_item.quantity !== undefined)?item.quantity:1

    _cartItems.push(_item)
    setCartItems(_cartItems);
  }
}

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data.response);
    //   setCartItems(response.data.response)
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {products.map((item, key) => (
          <Col className="gutter-row" span={6} key={key}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src={item?.image}
                />
              }
            >
                <div style={{display:"flex", flexDirection:"column", justifyContent:"start"}}>
                    <h4 style={{margin:"0px"}}>{item?.name}</h4>
                    <p>{item?.description}</p>
                    <strong style={{color:"red"}}>Rs: {item?.price}</strong>
                    <div>Quantity <InputNumber min={1}  defaultValue={1} onChange={(val)=>{
                        item.quantity = val
                    }} style={{marginLeft:"10px"}} /></div>
                    <Button type="primary" style={{marginTop:"10px"}} onClick={()=>updateOrAddToCart( item._id, item)}>Add to cart</Button>
                </div>
              
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Product;
