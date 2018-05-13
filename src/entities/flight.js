class Flight {
    constructor(id, altitude, flightNumber, direction, manufacturer, model, originAirport, destinationAirport, logo){
    this.id = id;
    this.altitude = Math.round(altitude * 0.304)
    this.flightNumber = flightNumber;
    this.direction = (direction % 2 === 0) ? "W" : "E";
    this.manufacturer = manufacturer;
    this.model = model;
    this.originAirport = originAirport;
    this.destinationAirport = destinationAirport;
    this.logo = logo;
    }
}

export default Flight;