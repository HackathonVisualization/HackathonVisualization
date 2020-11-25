import React from 'react'
// 添加echarts库, 在这里我们用的是echarts-for-react
import ReactEcharts from "echarts-for-react"

interface Props {
    teams: string[]
    commits: number[]
}

function Charts(props: Props) {

    return (
        <ReactEcharts
            option={{
                title: {
                    text: '各队伍提交数'
                },
                tooltip: {},
                legend: {
                    data: ['commits']
                },
                xAxis: {
                    data: props.teams,
                    axisLabel: {
                        interval: 0  //类别标签全显
                    }
                },
                yAxis: {},
                series: [{
                    name: 'commits',
                    type: 'bar',
                    data: props.commits
                }]
            }}
            style={{ height: '100%', width: '100%'}}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            // Lambda表达式
            onChartReady={() => { }} />

    )
}

export default Charts