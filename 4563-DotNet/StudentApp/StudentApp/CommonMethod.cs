using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal class CommonMethod
    {
        public string UserInput(string msg)
        {
            Console.Write(msg);
            string val=Console.ReadLine();
            return val;
        }

    }
}
