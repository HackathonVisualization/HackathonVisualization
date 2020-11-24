import React from 'react'
import { Breadcrumb } from 'antd'

interface Props {

}

function Teams(props: Props) {
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>所有队伍</Breadcrumb.Item>
            </Breadcrumb>
            {/* TODO: add list */}
        </div>
    );
}

export default Teams