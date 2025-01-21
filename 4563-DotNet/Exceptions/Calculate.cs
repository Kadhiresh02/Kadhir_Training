using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exceptions
{
    internal class Calculate
    {
        
        public void add(int a, int b)
        {
            int c = a + b;
            Console.WriteLine("Addition of "+a+" and "+b+" is "+c);
        }
        public void sub(int a, int b)
        {
            int c = a - b;
            Console.WriteLine("Subtraction of "+a+ " and " + b+" is "+c);
        }
    }
}
