// 1.   Create an object for a celebrity and save it to a variable
const psycheEros = {}
// 2.   Using dot-notation add 3 key-value pairs to the celebrity
psycheEros.age = '37'
psycheEros.location = 'norwich'
psycheEros.bifrost = 'rainbow'
// 3.   Using bracket-notation add 3 key-value pairs to the celebrity
psycheEros['fiveCube'] = '125'
psycheEros['sevenCube'] = '343'
psycheEros['sixCube'] = '216'
console.log(psycheEros)
// 4.   Write a function that allows us to add or update 3 properties
const updateObj = (obj,prop1,prop2,prop3) => {
    obj[prop1] = '125 555'
    obj[prop2] = '216 666'
    obj[prop3] = '343 777'
    return psycheEros
}
console.log(updateObj(psycheEros,'fiveCube','sixCube','sevenCube'))

//or
const changeVal = (obj,prop,newVal) => {
    obj[prop] = newVal
    return obj
}
console.log(changeVal(psycheEros,'fiveCube','125 555'))



//function as key
const psycheErosA = {
    threeCube: '27',
    fourCube: '64',
    start(){
    console.log('psycheCupid')
    },
}
psycheErosA.start()

//add in existing function
const cupid = () => {
    console.log(psycheCupid)
}
psycheErosA.cupid = cupid

//combine objects
const newObj = {...psycheEros,...psycheErosA}
console.log(newObj)

//or
const newObject = Object.assign(psycheEros,psycheErosA)
console.log(newObject)

console.log()

// 5.   Using a loop - log all the celebrities properties to the console
for(let key in psycheEros){
    console.log(`${key}`)
}
//or
console.log(Object.keys(psycheEros))

//
const grupo = {
    location: {
        maryanne: 'callelomanorte',
        kathy: 'north stonington',
        maureen: 'falcon crest'
    },
    ruth: {
        birthDate: '9-1-28',
        locations: ['SW 109 lane','san gabriel','country view']
    },
    dog: null
}
console.log(grupo.ruth.locations[0])