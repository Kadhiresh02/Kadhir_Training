using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal class ArrayFunctions
    {
        public void arraymethod()
        {
            int[] arrnum = { 12, 34, 54, 67, 64 };
            int[] newnums = new int[5];
            Console.WriteLine(Array.IndexOf(arrnum, 34));
            Console.WriteLine(Array.BinarySearch(arrnum, 64));

            arrnum.CopyTo(newnums, 0);
            Array.Resize(ref newnums, newnums.Length + 2);
            newnums[newnums.Length - 2] = 99;
            newnums[newnums.Length - 1] = 79;
            //Array.Sort(arrnum);
            //Array.Reverse(arrnum);
            Console.WriteLine("------------------");
            foreach (int num in newnums)
            {
                Console.WriteLine(num);
            }



        }

    }
}
