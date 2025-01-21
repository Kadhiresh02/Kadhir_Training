using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal class ListFunctions
    {
        public void Listf()
        {
            List<int> nums = new List<int>() { 23,43,25,74,57,84,34,59};
            List<int> newnums = new List<int>() { 1, 2, 3 };
            nums.Add(100);
            nums.Insert(3, 450);
            //nums.InsertRange(4, newnums);
            nums.AddRange(newnums);
            nums.Sort();
            nums.Reverse();
            nums.Remove(450);
            nums.RemoveAt(2);

            for (int i = 0; i < nums.Count; i++)
            {
                Console.WriteLine(nums[i]);
            }
        }
    }
}
