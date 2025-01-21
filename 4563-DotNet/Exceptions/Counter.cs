using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exceptions
{
    class Counter
    {
        public class Increment
        {
            public int counter = 1;
            public void doIncrement()
            {
                counter += 2;
                Console.WriteLine("After Increment is "+counter);
            }
        }
    }
}
