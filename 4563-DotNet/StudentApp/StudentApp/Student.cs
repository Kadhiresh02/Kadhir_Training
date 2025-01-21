using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    class Student :IPerson,IAddress,IContact
    {
        public int rollno { get; set; }
        //public string sname { get; set; }
        public string pname { get; set; }

        public char gender { get; set; }
        
        public static int id = 0;
        public string City { get; set; }

        public string State { get; set; }
        public string ZipCode { get; set; }
       public long  Mobile { get; set; }
       public string  Email { get; set; }

        public static int incrementId()
        {
            return ++id;
        }

        //public void displayDetails(int rollno = 0, string sname = " ", char gender = ' ')
        //{
        //    if (rollno > 0)
        //    {
        //        Console.WriteLine("Roll No.: " + rollno);

        //    }
        //    if (sname != "")
        //    {
        //        Console.WriteLine("Name : " + sname);
        //    }
        //    if (gender != ' ')
        //    {
        //        Console.WriteLine("Gender : " + gender);
        //    }


        //}

       public void  showDetails()
        {
            if (rollno > 0)
            {
                Console.WriteLine("Roll No.: " + rollno);

            }
            if (pname != "")
            {
                Console.WriteLine("Name : " + pname);
            }
            if (gender != ' ')
            {
                Console.WriteLine("Gender : " + gender);
            }
        }
        public string getAddress()
        {
            return $"Address City : {City}, State : {State} ,PinCode : {ZipCode}";
        }

        public string  ShowContact()
        {
            return $"Mobile : {Mobile} ,Email :{Email}";
        }
    }
}