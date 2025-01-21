using System;

namespace Helloworld
{
    class Employee
    {
      public  int eid;
      public  String ename;

        public Employee()
        {
            this.eid = 1;
            this.ename = "Kadhir";
        }
        public Employee(int id,string name)
        {
            this.eid = id;
            this.ename = name;
        }
        public Employee(int id)
        {
            this.eid = id;
        }
        public Employee(string name)
        {
            this.ename = name;
        }

        class Program
        {
            private static void Main(string[] args)
            {
                //Console.WriteLine("Hello, World!");
                //Console.WriteLine("Dhanush");
                //Console.ReadKey();


                Employee e1 = new Employee();
                Console.WriteLine("Eid :" + e1.eid);
                Console.WriteLine("Ename :" + e1.ename);
                Employee e2= new Employee(2,"Selva");
                Console.WriteLine("Eid :" + e2.eid);
                Console.WriteLine("Ename :" + e2.ename);
                Employee e3 = new Employee(3 );
                Console.WriteLine("Eid :" + e3.eid);
                Console.WriteLine("Ename :" + e3.ename);
                Employee e4 = new Employee("Dhanush");
                Console.WriteLine("Eid :" + e4.eid);
                Console.WriteLine("Ename :" + e4.ename);
            }

        }
    }
}