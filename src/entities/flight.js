class Flight {
    constructor(altitude, flightNumber, direction){
    this.altitude = Math.round(altitude * 0.304)
    this.flightNumber = flightNumber;
    this.direction = (direction % 2 === 0) ? "W" : "E";
    }
}

export default Flight;