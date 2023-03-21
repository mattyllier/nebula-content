// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
const myCar = {
    type: 'hatch',
    colour: 'white',
    year: 2022,
    mileage: 19000,
    recentOilChange: true,
    statesDrivenIn: ['IL','WI','MO','OK','TX','NM','AZ','AR','IN','KY','TN','GA','FL','SC','NC','VA','MD','WV','OH']
}

// 2.   Using dot-notation Log to the console 3 properties from the previous object
console.log(myCar.type,myCar.colour,myCar.mileage)

// 3.   Using bracket-notation Log to the console 3 properties from the previous object
console.log(myCar['year'],myCar['statesDrivenIn'],myCar['recentOilChange'])

// 4.   Try and log a property that doesn't already exist - what output do we get?
//console.log(myCar.washedRecently) 
//undefined

// 5.   Add a new key-value pair to the vehicle. 
myCar.washedRecently = true

// 6.   Using bracket-notation update a property on the vehicle. 
myCar['mileage'] = 19500

// 7.   Using dot-notation update a property on the vehicle. 
myCar.statesDrivenIn.push('CA')
console.log(myCar)
// 8.   Create a method for turning your vehicle on
const turnOn = function() {
    console.log('Turned On')
}
myCar.turnOn = turnOn
myCar.turnOn()

// 9.   Create a method for turning your vehicle off
myCar.turnOff = turnOff = () => {
    console.log('Turned Off')
}
myCar.turnOff()

//10.   
//      a. Check if your vehicle is on (it should be off)
myCar.turnOn()
//      b. Start your vehicle
const start = () => {
    console.log('Started')
}
myCar.start = start
myCar.start()
//      c. Check if your vehicle is on (it should be on)
myCar.turnOn()
//      d. Stop your vehicle
const stop = function() {
    console.log('Stopped')
}
myCar.stop = stop
myCar.stop()
//      e. Check if your vehicle is on (it should be on)
myCar.turnOn()



