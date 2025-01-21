using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeProject
{
    internal class EmployeeList
    {
        

        public void Menuemps()
        {
            bool exit = false;

            while (!exit)
            {
                 
                Console.WriteLine("****Main Menu****");
                Console.WriteLine("1. Display Employees");
                Console.WriteLine("2. Add Employee");
                Console.WriteLine("3. Update Employee");
                Console.WriteLine("4. Delete Employee");
                Console.WriteLine("5. Exit");
                Console.Write("Enter your choice: ");

                string choice = Console.ReadLine();

                switch (choice)
                {
                    case "1":
                        display();
                        break;
                    case "2":
                        Addemps();
                        break;
                    case "3":
                        UpdateEmps();
                        break;
                    case "4":
                        DeleteEmps();
                        break;
                    case "5":
                        exit = true;
                        Console.WriteLine("Exiting  ...");
                        break;
                    default:
                        Console.WriteLine("Invalid choice. Please try again.");
                        break;
                }

                //if (!exit)
                //{
                //    Console.WriteLine("\nPress Enter to continue...");
                //    Console.ReadLine();
                //}
            }
        }
        public void display()
        {
            //foreach (Employee emp in emps)
            //{
            //    Console.WriteLine(emp);
            //}
            Console.WriteLine("Display  ...");
        }
        public void Addemps()
        {
            Console.WriteLine("Addemps  ...");
        }
        public void UpdateEmps()
        {
            Console.WriteLine("UpdateEmps  ...");
        }
        public void DeleteEmps()
        {
            Console.WriteLine("DeleteEmps  ...");
        }
    }
}
