// 1.   What is the order of output?
setTimeout(() => {
    console.log('a');
}, 10);
console.log('b');

new Promise( (res,rej) => {res('c')}).then((val) => console.log('d', val));
console.log('e');

setTimeout(() => {
  console.log('f');
}, 0);

setTimeout(() => {
    console.log('g');
}, 20);

new Promise( (res) => {res('h')}).then(res => console.log(res, 'i'))

//b,c,d,h,i,f,a,g

// 2.   Create a new promise for something you may or may not do. 
//      After a few seconds log whether it has been done.

const promiseQ = new Promise((res,rej)=>{
    const threshhold = Math.random() >= .5
    setTimeout(()=>{
        threshhold ? res('threshhold has been reached') : rej('threshhold has not been reached')
    }, 5000)
})
//console.log(promiseQ)
setTimeout(()=>{console.log(promiseQ)},5001)

// 3.   Using the prior example use .then and .catch to handle responses and rejections

promiseQ
  .then(res=>`threshhold reached at ${res}`)
  .catch(err=>`${err}: does not meet the threshhold`)

// 4.   What does a promise resolve to?

//resolved or rejected


// 5. What is the output of the following code?


const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.then((v) => {
    console.log(v);
  });


  //v, v*2, v*2, v
