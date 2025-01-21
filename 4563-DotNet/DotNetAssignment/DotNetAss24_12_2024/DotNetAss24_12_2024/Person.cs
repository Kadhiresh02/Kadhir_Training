using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DotNetAss24_12_2024
{
    internal class Person
    {
        public string Name { get; private set; }


        public Person(string name)
        {
            Name = name;
        }

        public override string ToString()
        {
            return $"Person: {Name}";
        }
    }

    class Student : Person
    {
        public Student(string name) : base(name)
        {
        }

        public void Study()
        {
            Console.WriteLine($"{Name} is studying.");
        }
    }

    class Teacher : Person
    {
        public Teacher(string name) : base(name)
        {
        }

        public void Explain()
        {
            Console.WriteLine($"{Name} is explaining.");
        }
    }

    //class Program1
    //{
    //    static void Main(string[] args)
    //    {
    //        Person[] people = new Person[3];

    //        for (int i = 0; i < 2; i++)
    //        {
    //            Console.Write($"Enter the name of Student {i + 1}: ");
    //            string studentName = Console.ReadLine();
    //            people[i] = new Student(studentName);
    //        }

    //        Console.Write("Enter the name of the Teacher: ");
    //        string teacherName = Console.ReadLine();
    //        people[2] = new Teacher(teacherName);

    //        foreach (var person in people)
    //        {
    //            Console.WriteLine(person);
    //            if (person is Student student)
    //            {
    //                student.Study();
    //            }
    //            else if (person is Teacher teacher)
    //            {
    //                teacher.Explain();
    //            }
    //        }
    //    }
    //}
}
