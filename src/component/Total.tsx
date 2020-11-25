import React from 'react'
import { Breadcrumb } from 'antd'
import TotalCharts from './TotalCharts'

interface Props {
    teams: string[]
    commits: number[]
}

function Total(props: Props) {
    return (
        <div style={{ height: '100%'}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>总览</Breadcrumb.Item>
            </Breadcrumb>
            <TotalCharts teams={props.teams} commits={props.commits}/>
        </div>
    )
}

export default Total