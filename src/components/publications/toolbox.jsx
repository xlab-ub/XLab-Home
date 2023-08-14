import React from "react";
import { BlockOutlined, FilterOutlined, BarChartOutlined, ToTopOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { useState } from 'react';

const Toolbox = () => {
    const [open] = useState(true);
    return (
      <div>
        <FloatButton.Group
          open={open}
          trigger="click"
          style={{
            right: 24+70+70,
            bottom: 24,
          }}
          icon={<BlockOutlined />}
        >
            <FloatButton icon={<FilterOutlined />} />
            <FloatButton icon={<BarChartOutlined />} />
            <FloatButton icon={<ToTopOutlined />} />
        </FloatButton.Group>
      </div>
    );
};
export default Toolbox;