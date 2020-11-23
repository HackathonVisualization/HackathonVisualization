// 添加核心的react库
import React from 'react'

// 添加antd库, 用于承载echarts, 这个是引入的语法, 详见nodejs的文档
import { Layout, Menu } from 'antd'

// 添加css文件, css文件里又引入了antd的css
import './App.css'

// 添加路由
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Total from './component/Charts'
import Team from './component/Team'

import {
  PieChartOutlined,
  TeamOutlined,
} from '@ant-design/icons'

// 对象展开运算符, 方便后续书写, 语法详见ES7对象展开运算符
// 其实不这样写, 在后面用Layout.Header也可
const { Header, Content, Footer, Sider } = Layout

class App extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <a href="https://hackathon2020eastchina.top">
            <div className="sitename">
              Hackathon2020华东
            </div>
          </a>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              总览
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}>
              队伍
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Router>
              <Route path="/" component={Total} />
              <Route path="/team" component={Team} />
            </Router>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Hackathon 2020 East China ©2020</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App