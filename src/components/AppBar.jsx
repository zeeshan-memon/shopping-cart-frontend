import React, {useState} from 'react';
import { Layout, Menu, theme, Card } from 'antd';
import { ShoppingCartOutlined, ShoppingOutlined } from '@ant-design/icons';
import Product from '../pages/Products/Product';
import Cart from './Cart';
const { Header, Content, Footer } = Layout;

const items = [
    {key: 1,
    label: "Home"
    }
]
const AppBar = () => {
    const [open, setOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const loadCart = ()=>{
        setOpen(!open)
    }
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
         <ShoppingOutlined style={{color:"white", fontSize:"30px"}}/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent:"center"
          }}
        />
        <ShoppingCartOutlined onClick={loadCart} style={{color:"white", fontSize:"30px", cursor:"pointer"}}/>
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
            <Cart open={open} setOpen={setOpen} setCartItems={setCartItems} cartItems={cartItems}/>
          <Product setCartItems={setCartItems} cartItems={cartItems}/>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Shopping Cart ©{new Date().getFullYear()} Created by Zeeshan
      </Footer>
    </Layout>
  );
};
export default AppBar;