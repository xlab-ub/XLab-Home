import React from "react";
import { Link } from 'react-router-dom';
import { RollbackOutlined, SearchOutlined, FilterOutlined, BarChartOutlined, ToTopOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { useState } from 'react';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Adds smooth scrolling effect
  });
};

const Toolbox = () => {
    const [open] = useState(true);
    return (
      <div>
        <FloatButton.Group
          open={open}
          style={{
            right: 24+70+70,
            bottom: 24
          }}
        >
          <div style={{"margin-top": "10px"}}><Link to = "/search"><FloatButton icon={<SearchOutlined />} /></Link></div>
          <div style={{"margin-top": "10px"}}><Link to = "/filter"><FloatButton icon={<FilterOutlined />} /></Link></div>
          <div style={{"margin-top": "10px"}}><Link to = "/plot"><FloatButton icon={<BarChartOutlined />} /></Link></div>
          <div style={{"margin-top": "10px"}}><Link><FloatButton icon={<ToTopOutlined />} onClick={scrollToTop} /></Link></div>
          <div style={{"margin-top": "10px"}}><Link to="/publications"><FloatButton icon={<RollbackOutlined />} /></Link></div>
        </FloatButton.Group>
      </div>
    );
};
export default Toolbox;