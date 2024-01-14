import React, { useEffect, useState } from "react";
import { getProducts } from "../../Ations/ProductActin";
import { Col, Card, Row, Button, InputNumber } from "antd";
import { getValue } from "@testing-library/user-event/dist/utils";
const { Meta } = Card;

const Product = ({setCartItems, cartItems}) => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);

  const onChange = (item) => {
    console.log(item)
    if(items.length == 0){
        const _item = item
        _item.quantity = 1
        setItems([...items, _item])
    }else{

    }
  };

  const addToCart = (item) => {
   item.quantity = (item.quantity)?item.quantity:1
   setCartItems([...cartItems, items])
  };

  // Function to check if object with a specific value exists and update or add accordingly
function updateOrAdd(array, key, value, item) {
    item.quantity = (item.quantity)?item.quantity:1
  const index = array.findIndex(obj => obj[key] === value);

  if (index !== -1) {
    // Object with the specified value exists, update it
    array[index] = { ...array[index], ...item };
    setCartItems()
  } else {
    // Object with the specified value doesn't exist, add a new object
    setCartItems(item);
  }
}
  const loadProducts = async () => {
    try {
      const response = await getProducts();
      console.log(response.data.response);
      setProducts(response.data.response);
      setCartItems(response.data.response)
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
                        products[key].quantity =val

                    }} style={{marginLeft:"10px"}} /></div>
                    <Button type="primary" style={{marginTop:"10px"}}>Add to cart</Button>
                </div>
              
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Product;
