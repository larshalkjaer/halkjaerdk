import React, {useEffect} from "react";
import c3 from 'c3';
import 'c3/c3.css';

let linechart;

export default function LineChart(props) {
    const chartId = 'chart-container';

    useEffect(() => {
        linechart = renderChart();
    }, []);

    useEffect(() => {
        if (linechart && (props.data.length === 2))
        {
            linechart.load({
                columns: props.data
            });
        }
    }, [props.data]);

    const chartdata = {
        bindto: `#${chartId}`,
        padding: {
            right: 30,
        },
        data: {
            x: 'x',
            xFormat: '%Y-%m-%d %H:%M:%S',
            columns: [
                ['x'],
                ['temperature']
            ],
            names: {
                temperature: 'Temperatur'
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                localtime: true,
                tick: {
                    format: '%d-%m kl. %H',
                    rotate: 60,
                    multiline: false,
                    culling: {
                        max: 20
                    }
                }
            },
            y: {
                max: 40,
                min: -10,
                padding: {top:0, bottom:0},
                label: {
                    text: '°C',
                    position: 'outer-middle'
                }
            }
        }
    };

    function renderChart() {
        return c3.generate(chartdata);
    };

    return (
        <div id={chartId} />
    );
}