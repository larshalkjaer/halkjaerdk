import React, {useState, useEffect} from "react";
import LineChart from './LineChart.js';
import styles from '../styles/WeatherChart.module.css';

export default function WeatherChart(props) {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);
    
    const place = 'lat=55.45611111&lon=12.17972222'; // Køge
    const wheatherRequest = new Request(`https://api.met.no/weatherapi/locationforecast/2.0/compact?${place}`, {
      method: 'GET',
    });

    function getTemperatureDataList(weatherdata)
    {
        const usedHours = [0,6,12,18];
        const selectedElements = weatherdata.properties.timeseries.filter(element => {
            var time = new Date(element.time).getUTCHours();
            return (usedHours.indexOf(time) !== -1)
        });

        const timeLabels = selectedElements.map(element => {
            const time = new Date(element.time);
            const label = `${time.getUTCFullYear()}-${time.getUTCMonth() + 1}-${time.getUTCDate()} ${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`;
            return label;
        });

        const temperatureValues = selectedElements.map(element => {
            return element.data.instant.details.air_temperature;
        })

        return [['x', ...timeLabels], ['temperature', ...temperatureValues]];
    }

    const fetchData = async () => {
        const response = await fetch(wheatherRequest);
        const data = await response.json();
        const temperaturedata = getTemperatureDataList(data);
        setWeatherData(temperaturedata);
    }

    return (
        <div>
            <div className={styles.outer}>
                <LineChart data={weatherData} />
            </div>
        </div>
    );
}
