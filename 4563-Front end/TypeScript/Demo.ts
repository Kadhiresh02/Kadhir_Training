

console.log("Hi,Hello all Welocome");
//1. String data type
let fname:string;
fname="chiku";
let lname:string;
lname="chiku";
console.log(` First-Name:${fname} Last-Name:${lname}`);
//2.nummber
let num1:number=100,num2:number=0.5,num3:number=6351;
console.log(num1,num2,num3);
//3.boolean
let cond1:boolean=true,cond2:boolean=false;
console.log(cond1,cond2);

//4.array
let courses:string[]=["Html","Css","Javascript","Typescript"];
let courses1:Array<string>=["Html","Css","Javascript","Typescript"];

let pincode:Array<number>=[604202,782333,238930];
let pincode1:number[]=[604202,782333,238930];

//tupple:it allows us to store multiple type of data into array
let product:[number,string,boolean]=[100,"Mango",true];

//6.enum:- it create variable with constant value
enum days{sun=501,mon,tue,wed,thurs,fri,sat};
let data1=days.sun;

//7.union:- it allows us to store multiple values in single variable
let info:number | string | boolean =true;

//8.any:when we don't know what type of data is going to store in variable in that case we use it.
let mix:any="hello";
