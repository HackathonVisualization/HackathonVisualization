import React from 'react'
// 添加echarts库, 在这里我们用的是echarts-for-react
import ReactEcharts from "echarts-for-react"

interface Props {
    count: number
}

function Charts(props: Props) {

    return (
        <ReactEcharts
            option={{
                title: {
                    text: 'Count of commits'
                },
                tooltip: {},
                legend: {
                    data: ['count']
                },
                xAxis: {
                    data: ["OrangeX4", "Team Two", "Team Three", "Team Four", "Team Five", "Team Six"],
                    axisLabel: {
                        interval: 0  //类别标签全显
                    }
                },
                yAxis: {},
                series: [{
                    name: 'count',
                    type: 'bar',
                    data: [props.count, 20, 36, 10, 10, 20]
                }]
            }}
            style={{ height: '400px', width: '50%' }}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            // Lamdba表达式
            onChartReady={() => { }} />

    )
}

export default Charts