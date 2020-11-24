import React from 'react'
import { Breadcrumb } from 'antd'

interface Props {

}

function Total(props: Props) {
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>总览</Breadcrumb.Item>
            </Breadcrumb>
            {/* TODO： Add Chart here */}
        </div>
    )
}

export default Total