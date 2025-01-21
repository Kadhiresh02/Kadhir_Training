// export class Person{
    class Person{
    //data member
    pid:number=101;
    pname:string="Tarun";
    paddress:string="Chennai";

    //member function 
    personDetails(){
        console.log(`Id:${this.pid} Name:${this.pname} Address:${this.paddress}`);
    }

    //cresting constructor
    constructor(id:number,name:string,addr:string)
    {
        this.pid=id;
        this.pname=name;
        this.paddress=addr;
    }
}
 export default Person;
// //create object of class
// let personObj=new Person(102,"Rahul","Mumbai");
// console.log(personObj.pname);
// personObj.personDetails();

// let person3=new Person(104,"Madhav","Pune");
// // console.log()
// person3.personDetails();


//03/12/2024

// class company extends Person{
//     cName:string;
//     empcontact:number;
//     empPost:string;

//     constructor(id:number,name:string,addr:string,compname:string,econtact:number,epost:string){
//         super(id,name,addr);
//         this.cName=compname;
//         this.empcontact=econtact;
//         this.empPost=epost;
//     }
//     personDetails() {
//         console.log(`EmpId:${this.pid} EmpName:${this.pname} Post:${this.empPost} Company:${this.cName} Address:${this.paddress}Contact:${this.empcontact}`);
        
//     }
// }
// let compOn=new company(201,"Dhanush","Chennai","Changepond",3576348,"Fullstack developer");
//     compOn.personDetails();