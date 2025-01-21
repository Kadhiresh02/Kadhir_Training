using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal class StringFunctions
    {
        string fullname = "Kadhir V Selva ";
        string greetmsg = "Good Afternoon";
        string city = "Chennai";
        string city1 = "CHennai";
        public void stringMethods()
        {
            //Console.WriteLine("Actual String : " + fullname);
            //Console.WriteLine("Actual String : " + fullname.Trim());
            //Console.WriteLine("Lower Case : "+fullname.ToLower());
            //Console.WriteLine("Upper Case : " + fullname.ToUpper());
            //Console.WriteLine("Selecting using index : "+fullname[0]);
            //Console.WriteLine(fullname.Substring(1, 3));
            //Console.WriteLine(fullname.Remove(1, 3));
            //Console.WriteLine(fullname.StartsWith("Kadhir"));
            //Console.WriteLine(fullname.EndsWith("Selva"));
            //Console.WriteLine(fullname.Contains("r"));
            //Console.WriteLine(fullname.Equals(greetmsg));
            //Console.WriteLine(fullname.IndexOf(" "));
            //Console.WriteLine(fullname.LastIndexOf(" "));
            //Console.WriteLine(string.Format("Good Morning {0} ", fullname));
            //char[] crs = city.ToCharArray();
            //foreach (char c in crs) Console.WriteLine(c);
            //string[] nameArr = fullname.Split(" ");
            //foreach(string s in nameArr) Console.WriteLine(s);
            //Console.WriteLine(string.Join(" ", nameArr));


            //Console.WriteLine("Equal Method :"+city.Equals(city1,StringComparison.OrdinalIgnoreCase) );

            //Console.WriteLine("Replace : "+fullname.Replace("Kadhir","Kadhiresh",StringComparison.OrdinalIgnoreCase) );

            //Console.WriteLine("Enter name : ");
            //string name = Console.ReadLine();
            //name.ToLower();
            //string[] n1 = name.Split(" ");
            //string[] n2 = new string[n1.Length];
            //for (int i = 0; i < n1.Length; i++)
            //{
            //    string k = n1[i];
            //    string k1 = (k[0].ToString().ToUpper()) + k.Substring(1);
            //    n2[i] = k1;
            //}
            //Console.WriteLine(string.Join(" ", n2));




            //Console.WriteLine("Enter city : ");
            //string city = Console.ReadLine();

            //string rcity = "";
            //for (int i = city.Length - 1; i >= 0; i--)
            //{
            //    rcity += city[i];
            //}
            //Console.WriteLine(rcity);



            //string[] fruits = { "Banana", "Orange", "Gauva", "Grapes" };
            //string fruit = "Orange";
            Console.WriteLine("Enter the Size : ");
            int size = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("  ");
            string[] fruits = new string[size];
            Console.WriteLine($"Enter the {size } Fruits : ");
            for(int i=0;i<size;i++)
            {
                fruits[i] = Console.ReadLine();
            }
            Console.WriteLine("  ");
            Console.WriteLine("Enter the Fruit name to replace : ");
            string fruit = Console.ReadLine();
            Console.WriteLine("  ");
            Console.WriteLine("Enter the Fruit name to replace as : ");
            string fruitr = Console.ReadLine();
            Console.WriteLine("  ");
            Console.WriteLine("Fruits after Replacing :");
            int f = 0;
            for (int i = 0; i < fruits.Length; i++)
            {
                if (fruits[i].Equals(fruit, StringComparison.OrdinalIgnoreCase))
                {
                    fruits[i]=fruits[i].Replace(fruit,fruitr, StringComparison.OrdinalIgnoreCase);
                    f = 1;
                }
                
            }
            if (f == 1)
            {
                for (int i = 0; i < fruits.Length; i++)
                {
                    Console.WriteLine(fruits[i]);
                }
            }
            else
            {
                Console.WriteLine("No Matches Found");
            }
            Console.WriteLine("  ");
            Console.WriteLine("------------------");
            Console.WriteLine("  ");
            string str1 = "She sells sea shells on the sea shore";
            string[] str2 = str1.Split(" ");
            Console.WriteLine($"There are {str2.Length} words in {str1}");
            char  chf = 's';
            int chcount = 0;
            for (int i = 0; i < str1.Length; i++)
            {
                if (str1[i] == chf){
                    chcount++;
                }
            }
            Console.WriteLine($"There are {chcount} in {str1}");

        }
    }
}
        