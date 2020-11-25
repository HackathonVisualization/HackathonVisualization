import React from 'react'
import { Breadcrumb } from 'antd'
import TeamCard from './TeamCard';

interface Props {
    data: {
        team: string
        repo: string
        member: {
            [name: string]: string
        }
    }[]
}

function Teams(props: Props) {
    return (
        <div style={{ height: '100%' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>所有队伍</Breadcrumb.Item>
            </Breadcrumb>
            {props.data.map((value) => <TeamCard team={value.team} members={Object.values(value.member)} />)}
        </div>
    )
}

export default Teams