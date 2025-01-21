using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeProject
{
    internal class Employee
    {
        

        private int eid { get; set; }
        private string ename { get; set; }
        private string designation { get; set; }
        public Employee(int eid, string ename,string designation)
        {
            this.eid = eid;
            this.ename = ename;
            this.designation = designation; 
        }

        //public string displaydetails()
        //{
        //    return $
        //}

    }
}
