// 添加核心的react库
import React, { useEffect, useState } from 'react'

// 添加antd库, 用于承载echarts, 这个是引入的语法, 详见nodejs的文档
import { Layout, Menu, Breadcrumb } from 'antd'
// 添加echarts库, 在这里我们用的是echarts-for-react
import ReactEcharts from "echarts-for-react"

// 引入utils文件, 取得获取数据的"伪"后端函数库
import { getCountOfCommits } from './utils'

// 添加css文件, css文件里又引入了antd的css
import './App.css'

import {
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'

// 对象展开运算符, 方便后续书写, 语法详见ES7对象展开运算符
// 其实不这样写, 在后面用Layout.Header也可
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

function App() {

    // React Hook 语法, 较复杂, 推荐最后再看
    const [countOfCommits, setCountOfCommits] = useState(0)
    // 使用Lambda表达式, 这里是用于初始化的
    useEffect(() => {
        getCountOfCommits('OrangeX4','orangex4.github.io', (count) => {
            // alert(count)
            setCountOfCommits(count)
        })
    },[])

    // JSX语法, 在JS里写标签, 详见React文档
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Total
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Total</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <ReactEcharts
                            option={{
                                title: {
                                    text: 'Count of commits'
                                },
                                tooltip: {},
                                legend: {
                                    data: ['count']
                                },
                                xAxis: {
                                    data: ["OrangeX4", "Team Two", "Team Three", "Team Four", "Team Five", "Team Six"],
                                    axisLabel:{
                                        interval:0  //类别标签全显
                                    }
                                },
                                yAxis: {},
                                series: [{
                                    name: 'count',
                                    type: 'bar',
                                    data: [countOfCommits, 20, 36, 10, 10, 20]
                                }]
                            }}
                            style={{height: '400px', width: '50%'}}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                            // Lamdba表达式
                            onChartReady={() => { }} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

export default App