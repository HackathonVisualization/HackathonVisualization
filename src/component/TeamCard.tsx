import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

interface Props {
    team: string,
    members: string[]
}

function TeamCard(props: Props) {
    return (
        <Card title={props.team} bordered={false} style={{ width: 300 }}>
            <p>{props.members.join(', ')}</p>
            <Link to={`/team/${props.team}`} />
        </Card>
    )
}

export default TeamCard