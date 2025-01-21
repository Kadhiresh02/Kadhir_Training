using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    class Faculty : IContact, IPerson, IAddress
    {
        public int facId { get; set; }
       public long  Mobile { get ; set ; }
        public string  Email { get; set; }
        public string  pname { get; set; }
        public char  gender { get; set; }
        public string  City { get; set; }
        public string  State { get; set; }
        public string  ZipCode { get; set; }
        public static int id = 0;
        public static int incrementId()
        {
            return ++id;
        }
        public string  getAddress()
        {
            return $"Address City : {City}, State : {State} ,PinCode : {ZipCode}";
        }

        public string  ShowContact()
        {
            return $"Mobile : {Mobile} ,Email :{Email}";
        }

        public void  showDetails()
        {
            if (facId > 0)
            {
                Console.WriteLine("Roll No.: " + facId);

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
    }
}
