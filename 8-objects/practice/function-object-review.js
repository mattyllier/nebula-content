// Create two objects each with 2 key value pairs and then check to see if all leat one of the key value pairs match
maryanne = {
    birthdate: new Date('February 24, 1955'),
    location: 'Santa Fe',
    address: 'Callelomanorte'
}
kathleen = {
    birthdate: new Date('May 30, 1952'),
    location: 'North Stonington',
    address: 'Callelomanorte'
}
const checkObj = (obj1,obj2) => {
    for(let i = 0; i < Object.keys(obj1).length; i++){
        for(let j = 0; j < Object.keys(obj2).length; j++){
            if(Object.keys(obj1)[i]===Object.keys(obj2)[j]){
                return true
            }
        }
    }
    return false
}
console.log(checkObj(maryanne,kathleen))


//or
const nestedBoolean = (obj1,obj2) => {
    let obj1keys = Object.keys(obj1)
    let obj2keys = Object.keys(obj2)
    for(let i = 0; i < obj1keys.length; i++){
        for(let j = 0; j < obj2keys.length; j++){
                    if(obj1keys[i]===obj2keys[j]){
                        return true
                    }
        }
    }
return false
}
console.log(nestedBoolean(maryanne,kathleen))


//better
const boolean = (obj1,obj2) => {
    for(let key in obj1){
        if(obj2[key]){
            return true
        }
    }
    return false
}


//Write a function that accepts two objects and returns true or false
const trueOrFalse = (obj1,obj2) => {
    return obj1.birthdate <= obj2.birthdate ? true : false
}
console.log(trueOrFalse(kathleen,maryanne))


// BONUS: Create a nested object and then iterate over it 
const grupo = {
    maryanne: {
        birthdate: new Date('February 24, 1955'),
        location: 'Santa Fe',
        address: 'Callelomanorte'
    },
    kathleen: {
        birthdate: new Date('May 30, 1952'),
        location: 'North Stonington',
        address: 'Hwy 384'
    },
    maureen: {
        birthdate: new Date('January 5, 1957'),
        location: 'McKinney',
        address: 'Falcon Crest'
    }
}

const nestedObj = (obj) => {
    for(let propA in obj){
        console.log(propA)
        for(let propB in obj[propA]){
           console.log(obj[propA][propB])
        }
    }
}
nestedObj(grupo)

//better renamed
for(let member in grupo){
    console.log(member)
    const familyMember = grupo[member]
    for(let characteristic in familyMember){
        console.log(`${characteristic}: ${familyMember[characteristic]}`)
    }
}