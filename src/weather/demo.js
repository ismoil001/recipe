import React, {Component} from 'react';
import 'react-open-weather/lib/css/ReactWeather.css';
import {ReactWeather} from "react-open-weather";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: '',
            lon: ''
        };
    }

    componentDidMount() {

        const getLocation = () => {
            navigator.geolocation.getCurrentPosition(showPosition);
        };

        const showPosition = (position) => {
            this.setState({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            });
        };
        getLocation()
    }
    render() {
        const {lat, lon} = this.state;
        const ReactWeather = require('react-open-weather').default;
        require('react-open-weather/lib/css/ReactWeather.css');
        return (
            <div>
                    {(lat || lon) ? <ReactWeather
                        forecast="5days"
                        apikey="429736441cf3572838aa10530929f7cd"
                        type="geo"  
                        lat={lat}
                        lon={lon}
                        lang='en'
                    /> : ''}

            </div>
        );
    }
}

export default Demo;