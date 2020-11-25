import React from 'react'
// 添加echarts库, 在这里我们用的是echarts-for-react
import ReactEcharts from "echarts-for-react"
import { Col, Row } from 'antd'

interface Props {
    commits: {
        name: string,
        value: number
    }[]
    languages: {
        name: string,
        value: number
    }[]
}

function TeamCharts(props: Props) {

    return (
        <div style={{ height: '100%' }}>
            <Row gutter={[8, 8]}>
                <Col span={12}>
                    <ReactEcharts
                        option={{
                            title: {
                                text: 'Commits数量',
                                left: 'center'
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: '{b} : {c} ({d}%)'
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left',
                                data: props.commits.map((value) => value.name)
                            },
                            series: {
                                type: 'pie',
                                data: props.commits
                            }
                        }}
                        style={{ height: '400px', width: '100%'}}
                        notMerge={true}
                        lazyUpdate={true}
                        theme={"theme_name"}
                        onChartReady={() => { }} />
                </Col>
                <Col span={12}>
                    <ReactEcharts
                        option={{
                            title: {
                                text: '使用语言',
                                left: 'center'
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: '{b} : {c} ({d}%)'
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left',
                                data: props.languages.map((value) => value.name)
                            },
                            series: {
                                type: 'pie',
                                data: props.languages
                            }
                        }}
                        style={{ height: '400px', width: '100%'}}
                        notMerge={true}
                        lazyUpdate={true}
                        theme={"theme_name"}
                        onChartReady={() => { }} />
                </Col>
            </Row>
        </div>
    )
}

export default TeamCharts