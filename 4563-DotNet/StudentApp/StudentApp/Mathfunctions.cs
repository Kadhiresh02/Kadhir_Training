using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal class Mathfunctions
    {
         
       
        public void mathmethod()
        {
            //Console.WriteLine("Enter num1 :");
            //int n1= Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("Enter num2 :");
            //int n2= Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("Enter Double value :");
            //double x= Convert.ToDouble(Console.ReadLine());
            //Console.WriteLine("Enter Negative value :");
            //int n3= Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("------------------------------------------------");
            //Console.WriteLine($"Min of {n1} and {n2} is : {Math.Min(n1, n2)}");
            //Console.WriteLine($"Max of {n1} and {n2} is : {Math.Max(n1, n2)}");
            //Console.WriteLine($"Floor of {x} is : {Math.Floor(x)}");
            //Console.WriteLine($"Ceil of {x} is : {Math.Ceiling(x)}");
            //Console.WriteLine($"Power of {n2} and {n1} is : {Math.Pow(n2, n1)}");
            //Console.WriteLine($"Square root of {n2} is : {Math.Sqrt(n2)}");
            //Console.WriteLine($"Abs of {n3} is : {Math.Abs(n3)}");
            //Console.WriteLine($"Round of {x} is : {Math.Round(x)}");


            
            //Console.WriteLine("Enter Array Size : ");
            //int size = Convert.ToInt32(Console.ReadLine());
            //int[] number = new int[size];
            //Console.WriteLine($"Enter {size} Values : ");
            //for(int i = 0;i<size;i++)
            //{
            //    number[i]= Convert.ToInt32(Console.ReadLine());
            //}
            //for (int i = 0; i < size; i++)
            //{
            //    Console.WriteLine(number[i]);
            //}

            int[] number = { 4, 5, 3, 2, 10, 8 };
            //Array.Sort(number);
            //Console.WriteLine("Minimum Value in array is : " + number[0]);
            //Console.WriteLine("Maximum Value in array is : " + number[number.Length-1]);

            int minV = number[0];
            int maxV = number[0];
            for (int i = 1; i < number.Length; i++)
            {
                if (number[i] < minV)
                {
                    minV = number[i];
                }
                if (number[i] > maxV)
                {
                    maxV = number[i];
                }
                 
            }
            Console.WriteLine("Minimum Value in array is : " + minV);
            Console.WriteLine("Maximum Value in array is : " + maxV);
            Console.WriteLine("-------------------------");
             
            int minVal = number[0];
            int maxVal = number[0];
            for (int i=1;i<number.Length;i++)
            {
                minVal=Math.Min(minVal,number[i]);
                maxVal=Math.Max(maxVal,number[i]);
            }

            Console.WriteLine("Minimum Value in array is : " + minVal);
            Console.WriteLine("Maximum Value in array is : " + maxVal);
        }
    } 
}
