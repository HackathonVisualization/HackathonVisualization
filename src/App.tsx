// 添加核心的react库
import React, { useEffect, useState } from 'react'

// 添加antd库, 用于承载echarts, 这个是引入的语法, 详见nodejs的文档
import { Layout, Menu } from 'antd'

// 引入名为 Charts 的 Component, 这是数据可视化的主要工作
// import Charts from './component/Charts'

// 引入utils文件, 取得获取数据的"伪"后端函数库
import { getCountOfCommits } from './utils'

// 参赛选手的数据, 队名, 仓库名, 成员名, 之后只需要将数据写在data.json就好
// data的数据可以直接调用, 如 data[0].team
import data from './data.json'

// 添加css文件, css文件里又引入了antd的css
import './App.css'

// 添加路由
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

// 需要的组件
import Total from './component/Total'
import Teams from './component/Teams'
import TeamShow from './component/TeamShow'

import {
    PieChartOutlined,
    TeamOutlined,
} from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout

// interface Data {
//     team: string
//     repo: string
//     member: {
//         [name: string]: string
//     }
// }

interface CommitsData {
    [team: string]: { [member: string]: number }
}

function App() {

    const [teams, setTeams] = useState([] as string[])
    const [commits, setCommits] = useState([] as number[])
    const [commitsData, setCommitsData] = useState({} as CommitsData)

    // 初始化, 获取相关的数据
    useEffect(() => {
        setTeams([])
        setCommits([])
        setCommitsData({})
        data.forEach(one => {
            getCountOfCommits(one.repo, (count, sum) => {
                // 踩坑, 如果用到本身的值的话, 应该要用lambda函数来获取原来的值
                setTeams((teams) => [...teams, one.team])
                setCommits((commits) => [...commits, sum])
                setCommitsData((teamsData) => { return { ...teamsData, [one.team]: count } })
            })
        })
    }, [])

    function getTeamData(team: string) {
        let teamData = {
            team: '',
            repo: '',
            member: {} as { [member: string]: string },
            commits: {} as { [member: string]: number }
        }
        data.forEach((value) => {
            if(team === value.team) {
                teamData = {...value as any, commits: commitsData[team]}
            }
        })
        return teamData
    }

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <a href="https://hackathon2020eastchina.top">
                        <div className="sitename">
                            Hackathon2020华东
                        </div>
                    </a>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="total" icon={<PieChartOutlined />}>
                            <span>总览</span>
                            <Link to="/" />
                        </Menu.Item>
                        <Menu.Item key="team" icon={<TeamOutlined />}>
                            <span>所有队伍</span>
                            <Link to="/team" />
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0, background: "white" }}>
                        <p style={{fontWeight: 'bold', paddingLeft: '20px', fontSize: '18px'}}>Hackathon 2020 EC 数据展示</p>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        {/* 内容路由 */}
                        <Route exact path="/" component={() => {
                            return <Total teams={teams} commits={commits} />
                        }} />
                        <Route exact path="/team" component={() => {
                            return <Teams data={data as any} />
                        }} />
                        <Route path="/team/:team" component={(props: any) => {
                            return <TeamShow {...getTeamData(props.match.params.team)} />
                        }} />

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Hackathon 2020 East China  ©2020</Footer>
                </Layout>
            </Layout>
        </Router>
    )
}


export default App