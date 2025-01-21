using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal class ArrayTask
    {

        public void arrintsearch()
        {
            int[] arr = { 34, 53, 521, 751, 89, 135, 87 };
            Console.WriteLine("Enter the element to search : ");
            int searchel = Convert.ToInt32(Console.ReadLine());
            //int ind = -1;
            //for (int i = 0; i < arr.Length; i++)
            //{
            //    if(arr[i] == searchel)
            //    {
            //        ind=i; break;
            //    }

            //}
            //Console.WriteLine(" ");
            //if (ind>=0)
            //{
            //    Console.WriteLine($"{searchel} is present in index {ind} ");
            //}
            //else

            //{
            //    Console.WriteLine($"{searchel} is not present in array");
            //}
            int k = Array.IndexOf(arr, searchel);
            if (k >= 0)
            {
                Console.WriteLine($"{searchel} is present in index {k} ");
            }
            else
            {
                Console.WriteLine($"{searchel} is not present in array");
            }

        }
        public void arrstringsearch()
        {
            string[] fruits = { "Apple", "Fig", "Orange", "Papaya", "Lemon" };
            Console.WriteLine("Enter the Fruit to search : ");
            string sfruit = Console.ReadLine();
            //int index = Array.IndexOf(fruits, sfruit);
            //if (index >= 0)
            //{
            //    Console.WriteLine($"{sfruit} is present in index {index} ");
            //}
            //else
            //{
            //    Console.WriteLine($"{sfruit} is not present in array");
            //}
            int index = -1;
            for (int i = 0; i < fruits.Length; i++)
            {
                if (fruits[i].Equals(sfruit, StringComparison.OrdinalIgnoreCase))
                {
                    index = i;
                    break;
                }

            }
            if (index >= 0)
            {
                Console.WriteLine($"{sfruit} is present in index {index} ");
            }
            else
            {
                Console.WriteLine($"{sfruit} is not present in array");
            }
        }

        public void MenuTask(int k)
        {
            switch (k) 
            {
                case 1:
                {
                        string[] fruits = { "Apple", "Fig", "Orange", "Papaya", "Lemon" };
                        foreach (string fr in fruits)
                        {
                            Console.WriteLine(fr);
                        }
                        Console.WriteLine(" ");
                        arraymenutask1();
                        break;
                }
                case 2:
                {
                    string[] fruits = { "Apple", "Fig", "Orange", "Papaya", "Lemon" };
                    Console.WriteLine("Enter the Fruit to search : ");
                    string sfruit = Console.ReadLine();
                    int index = -1;
                    for (int i = 0; i < fruits.Length; i++)
                    {
                        if (fruits[i].Equals(sfruit, StringComparison.OrdinalIgnoreCase))
                        {
                            index = i;
                            break;
                        }
                    }
                    if (index >= 0)
                    {
                        Console.WriteLine($"{sfruit} is present in index {index} ");
                    }
                    else
                    {
                        Console.WriteLine($"{sfruit} is not present in array");
                    }
                    Console.WriteLine(" ");
                    arraymenutask1();
                    break;
                }
                case 3:
                {
                     break;
                }
                default:
                {
                        Console.WriteLine("Invalid Choice");
                        break;
                }
            }
        } 
        public void arraymenutask1()
        {
            Console.WriteLine("1.Display Fruit");
            Console.WriteLine("2.Find Fruit");
            Console.WriteLine("3.Exit");
            Console.WriteLine("Select Your Option :");
            int opt = Convert.ToInt32(Console.ReadLine());
            MenuTask(opt);
            Console.WriteLine(" ");
        }
    }
}
