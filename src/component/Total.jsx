import React from 'react'
import { Breadcrumb } from 'antd'
class Total extends React.Component {

  render() {
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>总览</Breadcrumb.Item>
        </Breadcrumb>
        {/* TODO： Add Chart here */}
      </div>
    );
  }
}

export default Total