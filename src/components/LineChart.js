import React, {useEffect} from "react";
import CanvasJS from '../lib/canvasjs.react';

let linechart;

export default function LineChart(props) {

    useEffect(() => {
        linechart = new CanvasJS.Chart(chartContainerId, chartOptions);
        linechart.render();
    }, []);

    useEffect(() => {
        if (linechart && linechart.options && (Object.keys(props.data).length > 0))
        {
            linechart.options.data[0].dataPoints = props.data;
            linechart.render();
        }
    }, [props.data]);

    const chartOptions = {
        backgroundColor: 'rgba(255,255,255,0)',
        title: {
            text: props.title,
            fontFamily: 'Quicksand, sans-serif',
            fontSize: 25,
            fontWeight: 'bold'
        },
        axisX: {
            labelAngle: -90,
            labelFontSize: 16
        },
        axisY: {
            labelFontSize: 16
        },
        data: [{
            type: 'line',
            dataPoints : []
        }]
    }

    const chartContainerId = "canvasjs-chart-container";
    const defaultStyles = {width: "100%", position: "relative"};
    const propStyles = props.width ? {width: props.width} : {};
    const containerStyles = {...defaultStyles, ...propStyles};
    props.bounds && (chartOptions.axisY = {...chartOptions.axisY, ...props.bounds});
    
    return (
        <div id={chartContainerId} style={containerStyles} className={props.styles}/>
    );
}