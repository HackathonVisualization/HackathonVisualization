import React, { useEffect, useState } from 'react'
import { Breadcrumb, Divider } from 'antd'
import { Link } from 'react-router-dom';

import { getCountOfCommits, getLanguagesDistribution } from '../utils'
import { getTheLastCommitTime } from '../utils'
import TeamCharts from './TeamChart';

interface Props {
    team: string
    repo: string
    member: { [member: string]: string }
}

function TeamShow(props: Props) {

    // 其实这里不应该在组件里获取数据, 按照React理念应该要由App.tsx传递下来, 但是稍微违反一次应该也没什么事
    const [commits, setCommits] = useState({} as { [name: string]: number })
    const [lastCommitTime, setLastCommitTime] = useState('')
    const [languages, setLanguages] = useState({} as { [language: string]: number })

    useEffect(() => {
        getCountOfCommits(props.repo, (count) => setCommits(count))
        getTheLastCommitTime(props.repo, (time) => setLastCommitTime(time))
        getLanguagesDistribution(props.repo, (lan) => setLanguages(lan))
    }, [props.repo])

    return (
        <div style={{ height: '100%' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                    <Link to="/team">所有队伍</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{props.team}</Breadcrumb.Item>
            </Breadcrumb>
            <p>成员: {Object.values(props.member).join(', ')}</p>
            <p>最后一次Commit时间: {lastCommitTime}</p>
            <a href={`https://github.com/${props.repo}`}>GitHub 地址</a>
            <Divider />
            <TeamCharts
                commits={Object.keys(commits).map((key) => { return { name: props.member[key] ? props.member[key] : key, value: commits[key] } })}
                languages={Object.keys(languages).map((key) => { return { name: key, value: languages[key] } })} />
        </div>
    )
}

export default TeamShow