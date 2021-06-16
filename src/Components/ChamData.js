import React from 'react';
import ShowChamData from './ShowChamData.js'
import './ChamData.css'

const api_url = 
      "https://jkvon12345.pythonanywhere.com/get_data";

async function getapi(url) {

    // Storing response
    let response = await fetch(url);

    var data = await response.json()
    return data;
}


class DisplayData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: { 
                cpu_temp : "Loading...",
                temp: "Loading...",
                humid: "Loading..."},
        time: "Loading..."};
      }
  
    tick() {
        getapi(api_url).then((result) => {
            this.setState({
                data: { 
                    cpu_temp : result.data.cpu_temp,
                    temp: result.data.temp,
                    humid: result.data.humid},
                time: result.time});
            });
        }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    formatTime(secs) {
      let hours   = Math.floor(secs / 3600);
      let minutes = Math.floor(secs / 60) % 60;
      let seconds = secs % 60;
      return [hours, minutes, seconds]
          .map(v => ('' + v).padStart(2, '0'))
          .filter((v,i) => v !== '00' || i > 0)
          .join(':');
    }
  
    render() {
      return (
        <div>
          <ShowChamData data={this.state} />
        </div>
      );
    }
  }
  
export default DisplayData;