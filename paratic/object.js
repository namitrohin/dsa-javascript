// const obj={
//     name:"hello",
//     age:56
// }
// let current=obj;
// current.age=89
// console.log(obj)

// function Person(par){
//    this.name=par 
// }

// const personDetails=new Person('namie');
// console.log(personDetails)


// const date=new Date();
// const date2=new Date();
// Date.prototype.name="hello"
// console.log(date.name)
// console.log(date2.name)
// console.log(date2.getMilliseconds())



// function Person(name,email){
//     this.name=name
//     this.email=email
// }

// Person.address='Delhi'

// const personDetail1= new Person('namit',"nam@123.com")
// const personDetail2= new Person('amit','amit@com')
// personDetail1.__
// console.log(personDetail1.address)
// console.log(personDetail2.address)





// function useCallMethod(param1,param2){
//     console.log(param1,param2);
// }


// useCallMethod.call('hello',"namit")



let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);
console.log(encoded_uri)
console.log(decoded_uri)