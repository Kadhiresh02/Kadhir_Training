namespace StudentApp
{
    class Program
    {
        private static void Main(string[] args)
        {
            //Console.WriteLine("Student Application Management System");
            //Student s1 = new Student();
            //s1.rollno = Student.incrementId();
            //s1.sname = "Kadhir";
            //s1.gender = 'M';
            ////Console.WriteLine("Sid :" + s1.rollno);
            ////Console.WriteLine("SName :" + s1.sname);
            ////Console.WriteLine("Gender :"+s1.gender);
            //s1.displayDetails(sname: s1.sname, gender: s1.gender, rollno: s1.rollno);
            //Student s2=new Student();
            //s2.rollno = Student.incrementId();
            //s2.sname = "Kowsi";
            //s2.gender = 'F';
            ////Console.WriteLine("Sid :" + s2.rollno);
            ////Console.WriteLine("SName :" + s2.sname);
            ////Console.WriteLine("Gender :" + s2.gender);
            //s2.displayDetails(sname: s2.sname, rollno: s2.rollno);

            //Console.WriteLine("Using Interface ");
            //Student s1 = new Student();
            //s1.rollno = Student.incrementId();
            //s1.pname = "Kadhir";
            //s1.gender = 'M';
            //s1.City = "Chennai";
            //s1.State = "Tamil Nadu";
            //s1.ZipCode = "642201";
            //s1.Mobile = 9876543210;
            //s1.Email = "abc@gmail.com";
            //s1.showDetails();
            //Console.WriteLine(s1.getAddress());
            //Console.WriteLine(s1.ShowContact());
            //Console.WriteLine("---------------------------------------------------");
            //Student s2 = new Student();
            //s2.rollno = Student.incrementId();
            //s2.pname = "Kowsi";
            //s2.gender = 'F';
            //s2.showDetails();

            //Console.WriteLine("---------------------------------------------------");
            //Faculty f1=new Faculty();
            //f1.facId = Faculty.incrementId();
            //f1.pname = "Selva";
            //f1.gender = 'M';
            //f1.City = "Covai";
            //f1.State = "Tamil Nadu";
            //f1.ZipCode = "642202";
            //f1.Mobile = 9876543211;
            //f1.Email = "fghabc@gmail.com";
            //f1.showDetails();
            //Console.WriteLine(f1.getAddress());
            //Console.WriteLine(f1.ShowContact());



            //StudentApp.Banking.BanckAccount ba=new Banking.BanckAccount();
            //ba.cbalance = 100000;            
            //Console.WriteLine("Balance : {0}", ba.cbalance);
            //Console.WriteLine("Enter amount to Deposit : ");
            //double Deposit = Convert.ToDouble( Console.ReadLine());
            //ba.deposit(Deposit);
            //Console.WriteLine("After Deposit {0} Current balance :{1} " ,Deposit, ba.cbalance);
            //Console.WriteLine("Enter amount to Withdraw  : ");
            //double withdraw = Convert.ToDouble(Console.ReadLine());
            //ba.Withdraw(withdraw);
            //Console.WriteLine("After Withdrawing {0} balance : {1}", withdraw, ba.cbalance);


            //Console.WriteLine("Enter First Name : ");
            //String fname = Console.ReadLine();

            //Console.WriteLine("Enter Last Name : ");
            //String lname = Console.ReadLine();

            //Console.WriteLine("Enter City : ");
            //String city = Console.ReadLine();

            //Console.WriteLine("{0} {1} is coming from {2}",fname,lname,city);

            //Console.WriteLine("Name : {0} {1}", fname, lname);
            //Console.WriteLine("City : {0}", city);

            //StringFunctions strf = new StringFunctions();
            //strf.stringMethods();


            //Mathfunctions mf=new Mathfunctions();
            //mf.mathmethod();
            

            //DateTimeMethod dt=new DateTimeMethod();
            //dt.datemethod();


            //ArrayFunctions arrf = new ArrayFunctions();
            //arrf.arraymethod();

            //ArrayTask artsk = new ArrayTask();
            //artsk.arrintsearch();
            //artsk.arrstringsearch();
            //artsk.arraymenutask1();

            //ListFunctions listFunctions = new ListFunctions();
            //listFunctions.Listf();

            ListTasks lt =new ListTasks();
            lt.listmenu();


            Console.ReadKey();
        }
    }
}