// import { Person } from "./oops";   //if we use only export before class 
import  Person  from "./oops";  //if we use export default Person;
class company extends Person{
    cName:string;
    empcontact:number;
    empPost:string;

    constructor(id:number,name:string,addr:string,compname:string,econtact:number,epost:string){
        super(id,name,addr);
        this.cName=compname;
        this.empcontact=econtact;
        this.empPost=epost;
    }
    personDetails() {
        console.log(`EmpId:${this.pid} EmpName:${this.pname} Post:${this.empPost} Company:${this.cName} Address:${this.paddress}Contact:${this.empcontact}`);
        
    }
}
let compOn=new company(201,"Dhanush","Chennai","Changepond",3576348,"Fullstack developer");
    compOn.personDetails();