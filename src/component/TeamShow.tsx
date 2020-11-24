import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom';

interface Props {
    match: {
        params: {
            [name: string]: string
        }
    }
}

function TeamShow(props: Props) {
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                    <Link to="/team">所有队伍</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{props.match.params.id}</Breadcrumb.Item>
            </Breadcrumb>
            {/* TODO： Add Chart here */}
        </div>
    )
}

export default TeamShow