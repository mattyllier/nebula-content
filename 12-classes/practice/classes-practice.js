/* Question 1
Write a class that creates an animal
The animal class should have the following properties:
  - name
  - noise
  - eats
  - lives
The animal class should have the following methods:
  - makeNoise
  - eatsWhat
  - livesWhere*/

class Animal {
    constructor(name,noise,eats,lives){
        this.name = name
        this.noise = noise
        this.eats = eats
        this.lives = lives
    }
    makeNoise(){
        return `Makes ${this.noise} noise`
    }
    eatsWhat(){
        return `Eats ${this.eats}`
    }
    livesWhere(){
        return `Lives ${this.lives}`
    }
    sayDescription(){
        return `${this.name}s make a ${this.noise}, eat ${this.eats} and live ${this.lives}`
    }
}

/*
Initialize 3 animals with your class & log a sentence to the console, ex:
`Dogs live in peoples houses, they bark and are carnivorous.`
*/
const animal0 = new Animal('Merganser','merganser call','algae','near water')
const animal1 = new Animal('Kingfisher','kingfisher call','fish','in trees near water')
const animal2 = new Animal('Mink','mink noise','squirrels\, fish','in rocks near water')

console.log(animal2.sayDescription())


/* Question 2
Write a class that creates shoes
The shoe should have the following properties:
  - size
  - color
  - type
  - age
Initialize 3 shoes with your class & log a sentence to the console:
  ex: `My flipflops are yellow, size 9, and 6 years old.`
*/

class Shoes {
    constructor(size,color,type,age){
        this.size = size
        this.color = color
        this.type = type
        this.age = age
    }
}
const shoes0 = new Shoes('9"','black','athletic','1 year')
const shoes1 = new Shoes('10"','blue','flip flops','8 years')
const shoes2 = new Shoes('10"','brown','slippers','2 years')


//create parent and child
class Person {
    constructor(firstName,age){
        this.firstName = firstName
        this.age = age
    }
}
const person0 = new Person('Tal',47)

class Teacher extends Person {
    constructor(firstName,age,edLevel,subject){
    super(firstName,age);
    this.edLevel = edLevel;
    this.subject = subject;
    }
    sayDescription(){
        return `${this.firstName}, ${this.age}, teaches ${this.edLevel} in ${this.subject}.`
    }
}
const teacher1 = new Teacher('Ylan','28','Professional Development','Software Engineering')
console.log(teacher1.sayDescription())

//notes
class User{
    constructor(name,email){
        this.name = name
        this.email = email
    }
    comment(forum,comment){
        forum.setComment(comment, this.name);
    }
}

class Forum {
    constructor(subject){
        this.subject = subject
        this.comments = []
        this.commentCount = 0
    }
    setComment(comment,userName){
        this.comments.push({comment,userName});
        this.commentCount++
    }
    showComments(){
        this.comments.forEach(comment => console.log(`${comment.userName}${comment.comment}`))
    }
}