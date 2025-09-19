// let greet:string = 'hello Satwinder'
// console.log(greet)
// export{}

// type mystring = string 

// export type email= {
//  email: string
// }

// type User ={
//     name?: string[];
//     email: email
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name :[],email: {email: ""}, isActive:true}
//  }
// // var a= 23;


// Arrays
//  let arr:number[] = [1,2,3,4,5,"Satwinder Singh"]

//  console.log(arr)

// let arr:[string,number] =["Satwinder",24,28]
// console.log(arr) 

// Any , unknown , void , null , undefined , never 

// let a:unknown;
// a= 12 
// a= "Satwinder Singh"
// if(typeof a=== "string")
//     a.toUpperCase();

// let a:any
// a= 12 
// a= "Satwinder Singh"
// a.toUpperCase(); 

//interfaces

// interface User {
//   name: String;
//   email: String;
//   password: string;
//   age?:number
// }

// function getDataOfUser(obj:User){
//        return obj
// }
// getDataOfUser({name :"Satwinder",email:"satwinder",password:"sfsadasuyh",age:21})
// getDataOfUser({name :"Sat",email:"satw",password:"sfsadasuyh"})

interface User {
  name: String;
  email: String;
  password: string;
  age?:number
}

interface Admin extends User {
    admin:boolean
}

function getDataOfUser(obj:User){
       return obj
}
getDataOfUser({name :"Satwinder",email:"satwinder",password:"sfsadasuyh",age:21})
getDataOfUser({name :"Sat",email:"satw",password:"sfsadasuyh"})

