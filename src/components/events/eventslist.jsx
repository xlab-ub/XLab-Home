import React from 'react';
import { List } from 'antd';

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
  <div>
    <List
      itemLayout="vertical"
      size="large"
      // pagination={{
      //     align: "center",
      //     position: "bottom",
      //     onChange: (page) => {
      //       console.log(page);
      //     },
      //     defaultCurrent: 1,
      //     pageSize: 5
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
            title={<span><img width={24} src='fire.png'/>{" "}<a href={item.href}>{item.title}</a></span>}
            description={item.date}
          />
          <div className='event-cell'>
            {item.desc}
          </div>
        </List.Item>
      )}
    />
  </div>
);
export default AllEvents;