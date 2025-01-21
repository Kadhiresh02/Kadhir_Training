using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal class ListTasks
    {
        List<string> fruits= new List<string>() { "Apple", "Fig", "Orange", "Papaya", "Lemon" };
        CommonMethod cm=new CommonMethod();
        public void listmenu()
        {

            Console.WriteLine("**MENU**");
            Console.WriteLine("1.Display Fruit");
            Console.WriteLine("2.Add Fruit");
            Console.WriteLine("3.Update Fruit");
            Console.WriteLine("4.Delete Fruit");
            Console.WriteLine("5.Exit");
            Console.WriteLine("Enter your option : ");
            int opt=Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("  ");
            listmenu1(opt);
            Console.WriteLine("  ");

        }
        public void listmenu1(int option)
        {
            switch(option)
            {
                case 1:
                    {
                        displayfruit();
                        listmenu();
                        Console.WriteLine("  ");
                        break;
                    }
                case 2:
                    {
                        addfruit();
                        listmenu();
                        Console.WriteLine("  ");
                        break;
                    }
                case 3:
                    {
                        updatefruit();
                        listmenu();
                        Console.WriteLine("  ");
                        break;
                    }
                case 4:
                    {
                        deletefruit();
                        listmenu();
                        Console.WriteLine("  ");
                        break;
                    }
                case 5:
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
        public int ispresent(string fruit)
        {
            int index = -1;
            for (int i = 0; i < fruits.Count; i++)
            {
                if (fruits[i].Equals(fruit, StringComparison.OrdinalIgnoreCase))
                {
                    index = i;
                    break;
                }
            }
            return index;
        }
        public void displayfruit()
        {
            Console.WriteLine("Fruits in the list are displayed :");
            
            for (int i = 0; i < fruits.Count; i++)
            {
                string k = fruits[i];
                string k1 = k[0].ToString().ToUpper()+ k.Substring(1).ToLower();
                fruits[i] = k1;
            }
            for (int i = 0; i < fruits.Count; i++)
            {
                Console.WriteLine(fruits[i]);
            }
            Console.WriteLine("  ");
        }



        public void addfruit()
        { 
            string fruit = cm.UserInput("Enter the fruit to be add : ");
            int index=ispresent(fruit);
            if (index >= 0)
            {
                Console.WriteLine($"{fruit} is already present ");
                Console.WriteLine(" ");
                addfruit();
            }
            else
            {
                fruits.Add(fruit);
                 
            }
        }



        public void updatefruit()
        {
            Console.WriteLine("Enter the fruit to be replace : ");
            string repfruit= Console.ReadLine();
            int index = ispresent(repfruit);
            if(index>= 0)
            {
                string k = fruits[index];
                Console.WriteLine("Enter the fruit name to be replace as : ");
                
                string fruitreplace = Console.ReadLine();
                int ind = ispresent(fruitreplace);
                if(ind>= 0)
                {
                    Console.WriteLine($"{fruitreplace} is already present ");
                    updatefruit();
                }
                else
                {
                    fruits[index] = fruitreplace;
                    Console.WriteLine(" ");
                    
                }
                 
            }
            else
            {
                Console.WriteLine($"{repfruit} is not present ,Enter the another fruit !!");
                updatefruit();
            }
        }




        public void deletefruit()
        {
            Console.WriteLine("Enter the fruit to be delete : ");
            string fruit = Console.ReadLine();
            int index = ispresent(fruit);
            if (index >= 0)
            {

                string k = fruits[index];
                fruits.Remove(k);
                Console.WriteLine(" ");
                 
            }
            else
            {
                Console.WriteLine($"{fruit} is not present , Enter another Fruit!!");
                Console.WriteLine(" ");
                deletefruit();
            }
        }
    }
}
