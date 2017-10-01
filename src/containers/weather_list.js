import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather = (cityData) => {

        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const humids = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const { lon, lat } = cityData.city.coord;


        return (
            <tr key={name} >
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                    <Chart data={temps} color="#336aff" units="C" />
                </td>
                <td>
                    <Chart data={pressures} color="#336aff" units="hPa" />
                </td>
                <td>
                    <Chart data={humids} color="#336aff" units="%" />
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
};

const mapStateToProps = ({ weather }) => {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);