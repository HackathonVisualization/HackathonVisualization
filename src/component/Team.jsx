import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom';

class Teams extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>所有队伍</Breadcrumb.Item>
        </Breadcrumb>
        {/* TODO: add list */}
      </div>
    );
  }
}

class TeamShow extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/team">所有队伍</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{this.props.match.params.id}</Breadcrumb.Item>
        </Breadcrumb>
        {/* TODO： Add Chart here */}
      </div>
    );
  }
}

export { Teams, TeamShow }