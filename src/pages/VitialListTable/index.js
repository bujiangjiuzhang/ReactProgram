import React, { Component } from 'react';
import VirtualTable from './VirtualTable'
import config from './config'
import "./index.less";

const { columns ,data }=config

// 虚拟列表的实现
class VitialListTable extends Component {

  render() {
    return (
      <div>
        <VirtualTable
          columns={columns}
          dataSource={data}
          scroll={{
            y: 300,
            x: "100vw",
          }}
        />
      </div>
    );
  }
}

export default VitialListTable;
