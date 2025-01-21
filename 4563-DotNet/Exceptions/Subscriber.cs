using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exceptions
{
      class Subscriber
    {
        public void dowork()
        {
            Publisher p = new Publisher();
            //p.myevent += delegate (int a, int b)
            //{
            //    int res = a + b;
            //    Console.WriteLine("Sum of " + a + " and " + b + " is " + res);
            //};
            p.myevent += (a, b) => (a + b); //Lambda expressions
            p.increment();
        }
    }
}
