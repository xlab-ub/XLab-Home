import React from 'react';
import { List } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

import EventsINFO from '../../data/events';
import "./styles/eventslist.css";

const data = EventsINFO.map((event) => ({
  href: event.link,
  title: event.title,
  img: event.img,
  date: event.date,
  desc: event.desc
}));


const AllEvents = () => (
  <List
    itemLayout="vertical"
    size="large"
    // pagination={{
    //     align: "start",
    //     position: "top",
    //     onChange: (page) => {
    //       console.log(page);
    //     },
    //     defaultCurrent: 1,
    //     pageSize: 5,
    // }}
    footer={
        <div className='events-footer'>
          <b>@XLab</b>
        </div>
    }
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        key={item.title}
        extra={
          <img
            width={400}
            alt="logo"
            src={item.img}
          />
        }
      >
        <List.Item.Meta
          title={<p><a href={item.href}><LinkOutlined style={{ fontSize: '18px', color: '#005BBB'}}/>{" "}</a>{item.title}</p>}
          description={item.date}
        />
        <div className='event-cell'>
          {item.desc}
        </div>
      </List.Item>
    )}
  />
);
export default AllEvents;