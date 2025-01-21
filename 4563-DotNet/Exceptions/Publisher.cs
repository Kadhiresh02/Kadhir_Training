using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exceptions
{
    
      class Publisher
    {
        public event mydelegatetype myevent;
        public int x = 0, y = 0;
        public void increment()
        {
            x += 4;
            y += 5;
            int res = myevent(x, y);
            Console.WriteLine("Sum is " + res);
            myevent(x,y);
        }
    }
}
