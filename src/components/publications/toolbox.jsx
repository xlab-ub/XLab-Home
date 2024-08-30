import React from "react";
import { Link } from 'react-router-dom';
import {FloatButton } from 'antd';
import { RollbackOutlined, SearchOutlined, FilterOutlined, BarChartOutlined, ToTopOutlined } from '@ant-design/icons';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Adds smooth scrolling effect
    });
};

const Toolbox = () => {
    return (
        <div> 
            <FloatButton.Group style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000
        }}>
          <div style={{"margin-top": "10px"}}><Link to = "/xlab-home/search"><FloatButton icon={<SearchOutlined />} /></Link></div>
          <div style={{"margin-top": "10px"}}><Link to = "/xlab-home/filter"><FloatButton icon={<FilterOutlined />} /></Link></div>
          <div style={{"margin-top": "10px"}}><Link to = "/xlab-home/plot"><FloatButton icon={<BarChartOutlined />} /></Link></div>
          <div style={{"margin-top": "10px"}}><Link><FloatButton icon={<ToTopOutlined />} onClick={scrollToTop} /></Link></div>
          <div style={{"margin-top": "10px"}}><Link to="/xlab-home/publications"><FloatButton icon={<RollbackOutlined />} /></Link></div>
            </FloatButton.Group>
        </div>
    );
};

export default Toolbox;