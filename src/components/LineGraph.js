import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import numeral from 'numeral'; // npm i numeral

const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: { // Hover over graph to see data at that point
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function(value, index, values) {
                        return numeral(value).format("0a")
                    },
                },
            },
        ],
    },
}

const buildChartData = (data, casesType) => {
    let chartData = [];
    let lastDataPoint;

    for(let date in data.cases) {
        if(lastDataPoint) {
            let newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint
            }
            chartData.push(newDataPoint)
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData
}

function LineGraph({ casesType, ...props }) {
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30")
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    let chartData = buildChartData(data, casesType)
                    setData(chartData)
                    // console.log(chartData)
                })
            }
            fetchData()
        }, [casesType])


    return (
        <div className={props.className}>
            {data?.length > 0 && casesType === "recovered" && ( // Checks if data exists before trying to render info
                <Line
                    options={options}
                    data={{
                        datasets: [{
                            backgroundColor: "rgb(125, 215, 29, 0.5)",
                            borderColor: "green",
                            data: data
                        }]
                }} />
            )}
            {data?.length > 0 && casesType === "cases" && ( // Checks if data exists before trying to render info
                <Line
                    options={options}
                    data={{
                        datasets: [{
                            backgroundColor: "rgba(204, 16, 52, 0.5",
                            borderColor: "#CC1034",
                            data: data
                        }]
                }} />
            )}
            {data?.length > 0 && casesType === "deaths" && ( // Checks if data exists before trying to render info
                <Line
                    options={options}
                    data={{
                        datasets: [{
                            backgroundColor: "rgba(251, 68,67, 0.5)",
                            borderColor: "#fb4443",
                            data: data
                        }]
                }} />
            )}
        </div>
    )
}

export default LineGraph