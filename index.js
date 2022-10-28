class Person{
    constructor(name){
        this.ownerName = name
    }
}

class Vehicle extends Person{
    constructor(ownerName,vehicleName,fuelName,vehicleStatus,vehicleOrigin){
        super(ownerName)
        this.vehicle = vehicleName
        this.fuel = fuelName
        this.vehicleStatus = vehicleStatus
        this.vehicleOrigin = vehicleOrigin
    }
    getDetails(){
        return `${this.ownerName} has ${this.vehicle} which runs on ${this.fuel}.\nThis car is ${this.vehicleStatus} and ${this.vehicleOrigin} brand`
    }
}

let v1 = new Vehicle("Saurabh","Honda Accord Car","Diesel","New","Indian")
let v2 = new Vehicle("Saurabh","Ducati Bike","Petrol","Used","Imported")
console.log(v1.getDetails())
console.log(v2.getDetails())