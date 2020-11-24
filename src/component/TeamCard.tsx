import React from 'react'
import { Card } from 'antd'

interface Props {
    team: string[],
    commits: number[],
    members: string[],
    languages: string[]
}

function TeamCard(props: Props) {
    return (
        <Card title={props.team} bordered={false} style={{ width: 300 }}>
        <p>commits: {props.commits}</p>
        <p>members: {props.members.join(', ')}</p>
        <p>languages: {props.languages.join(', ')}</p>
      </Card>
    )
}

export default TeamCard