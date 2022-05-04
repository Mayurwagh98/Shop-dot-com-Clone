import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button, Space } from 'antd';

export const CartSlide = () => {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();

 

  const showLargeDrawer = () => {
    setSize('large');
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space>
        
        <button onClick={showLargeDrawer}>
         Cart
        </button>
      </Space>
      <Drawer
        title={`Shopping Cart`}
        placement="right"
        size={size}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            
            <Button type="primary" onClick={onClose}>
              *
            </Button>
          </Space>
        }
      >
          <div className='Cart-Slide-Detail'>
          <h2>Your shopping cart is empty.</h2>
            <p>Continue Shopping to add items to your cart.</p>
           <button>Payment Options / Save for Later</button>
          </div>
            <button className='Cart-continue-shopping'>Continue Shopping</button>
      </Drawer>
    </>
  );
};

