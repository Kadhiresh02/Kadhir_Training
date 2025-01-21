using OopsDemo;

internal class Program
{
    private static void Main(string[] args)
    {
        //Company comp1 = new Company(101,"Hematite");
        //comp1.displayCompanyDetails();

        //Employee e = new Employee(123, "Changepond");
        //e.eid = 1;
        //e.fname = "parag";
        //e.yob = 2002;
        //e.salary = 100000;
        //Console.WriteLine(e.displayEmpDetails());

        //Customer c1= new SavingsAccount();
        



        //-----------------------------


        Student s1=new Student(1,"Kadhir");
        Console.WriteLine("Student Id :" + s1.sid);
        Console.WriteLine("Student Name :" + s1.sname);
        Console.WriteLine("Student College :" + Student.collegename);
        Student s2 = new Student(2, "Kavin");
        Student.collegename = "XYZ College";
        Console.WriteLine("Student Id :" + s2.sid);
        Console.WriteLine("Student Name :" + s2.sname);
        Console.WriteLine("Student College :" + Student.collegename);


    }
}