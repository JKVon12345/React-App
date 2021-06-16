export default function ShowChamData (input_var) {
    var actData = input_var.data;
    console.log(actData)

    return(
        <div>
            <p className="ChamData">CPU Temp: {actData.data.cpu_temp}°F</p>
            <p className="ChamData">Temp: {actData.data.temp}°F</p>
            <p className="ChamData">Humidity: {actData.data.humid}%</p>
            <p className="ChamData">Last updated at: {actData.time}</p>
        </div>     
    );
}
