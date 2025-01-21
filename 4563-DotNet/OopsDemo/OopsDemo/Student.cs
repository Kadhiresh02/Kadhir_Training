using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OopsDemo
{
    class Student
    {
        public int sid;
        public string sname;
        public static string collegename = "Chennai IIT";
        public string cname = "Engineering";
        public const int semester = 8;

        public Student(int sid, string sname)
        {
            this.sid = sid;
            this.sname = sname;
        }
    }
}
