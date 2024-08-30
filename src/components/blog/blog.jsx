import React from 'react';
import { Avatar, Card, List } from 'antd';
import { FullscreenOutlined } from '@ant-design/icons';
import ArticlesINFO from "../../data/articles"
import { Link } from "react-router-dom";
import "./styles/blog.css"

const { Meta } = Card;

const AllBlogs = () => (
  <List
    grid={{
      gutter: 16,
      column: 2,
    }}
    dataSource={ArticlesINFO}
    renderItem={(item) => (
      <List.Item>
        <Card
         hoverable
    style={{
      width: 600,
    }}
    cover={
      <img
        alt="example"
        src={item.cover}
        className='blog-cover'
      />
    }
    title={item.title}
    extra=<Link to={item.paper}><FullscreenOutlined style={{ fontSize: '20px', color: '#27272a'}}/></Link>
    
  >
    <Meta
      avatar={<Avatar src={item.author_profile} />}
      title={item.author}
      description={item.date}
    />
    <hr />
    <div className='blog-desc'>
        {item.desc}
    </div>
    
  </Card>
      </List.Item>
    )}
  />
);
export default AllBlogs;