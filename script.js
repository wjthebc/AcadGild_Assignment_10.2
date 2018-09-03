class airplane {
//constructor
  constructor(name, occupancy, speed, increaseSpeed, decreaseSpeed)
  {
    this.name = name;
    this.occupancy = occupancy;
    this.speed = speed + increaseSpeed - decreaseSpeed;
    this.increaseSpeed = increaseSpeed;
    this.decreaseSpeed = decreaseSpeed;

//getters for setters
  }
  get name(){
    return this._name;
  }
  
  get occupancy(){
    return this._occupancy;
  }
  
  get speed(){
    return this._speed;
  }
  
   get increaseSpeed(){
    return this._increaseSpeed;
  }
  
  get decreaseSpeed(){
    return this._decreaseSpeed;
  }

//getter for status method
  get status(){
    return this.logStatus();
  }
  
//setters
  set name(newName){
    if (newName == undefined || newName == '') {
      throw new Error("Name cannot be empty or undefined")
    }
    this._name = newName;
  }
  
  set occupancy(newOccupancy){
    if (newOccupancy == undefined || newOccupancy == '' || newOccupancy < 0 || newOccupancy > 180) {
      throw new Error("Occupancy cannot be empty, undefined, negative, or over 180")
    }
    this._occupancy = newOccupancy;
  }
  
  set speed(newSpeed){
    if (newSpeed == undefined || newSpeed == '' || newSpeed < 0 || newSpeed > 900) {
      throw new Error("Speed cannot be empty, undefined, negative, or over 180")
    }
    
    this._speed = newSpeed;
  }
  
  set increaseSpeed(increase){
    this._increaseSpeed = increase;
  }

   set decreaseSpeed(decrease){
    this._decreaseSpeed = decrease;
  }

//method
  logStatus(){
    console.log("Airplane: " + this._name + " with " + this._occupancy + " occupancy, is moving at " + this._speed + " km/hr")
  }

//class bracket(Bill)
}

//creates new planes
var plane1 = new airplane ("bigplane", 180, 400, 200, 0);
var plane2 = new airplane ("smallplane", 100, 200, 200, 0);
var plane3 = new airplane ("mediumplane", 150, 300, 200, 0);

//logs status method for all planes
console.log(plane1.logStatus());
console.log(plane2.logStatus());
console.log(plane3.logStatus());


