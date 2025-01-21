using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    class DateTimeMethod
    {
        public void datemethod()
        {
            DateTime d;
            d= DateTime.Now;
            Console.WriteLine(d);
            Console.WriteLine($"Day ->{d.Day}");
            Console.WriteLine($"Month ->{d.Month}");
            Console.WriteLine($"Year -> {d.Year}");
            Console.WriteLine("-----------------");
            Console.WriteLine($"Hour -> {d.Hour}");
            Console.WriteLine($"Minute -> {d.Minute}");
            Console.WriteLine($"Second -> {d.Second}");
            Console.WriteLine($"Millisecond -> {d.Millisecond}");
            Console.WriteLine("-----------------");
            Console.WriteLine($"ShortTime -> {d.ToShortTimeString()}");
            Console.WriteLine($"LongTime -> {d.ToLongTimeString()}");
            Console.WriteLine($"ShortDate -> {d.ToShortDateString()}");
            Console.WriteLine($"LongDate -> {d.ToLongDateString()}");

        }
    }
}
