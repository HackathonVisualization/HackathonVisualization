import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

interface Props {
    team: string,
    members: string[]
}

function TeamCard(props: Props) {
    return (
        <Link to={`/team/${props.team}`}>
            <Card hoverable title={props.team} bordered={false} style={{ width: '100%' }}>
                <p>{props.members.join(', ')}</p>

            </Card>
        </Link>
    )
}

export default TeamCard