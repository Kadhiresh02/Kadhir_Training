namespace DotNetAss24_12_2024
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            Person[] people = new Person[3];

            for (int i = 0; i < 2; i++)
            {
                Console.Write($"Enter the name of Student {i + 1}: ");
                string studentName = Console.ReadLine();
                people[i] = new Student(studentName);
            }

            Console.Write("Enter the name of the Teacher: ");
            string teacherName = Console.ReadLine();
            people[2] = new Teacher(teacherName);

            foreach (var person in people)
            {
                Console.WriteLine(person);
                if (person is Student student)
                {
                    student.Study();
                }
                else if (person is Teacher teacher)
                {
                    teacher.Explain();
                }
            }

            PhotoBook defaultPhotoBook = new PhotoBook();
            Console.WriteLine("Default Photo Book Pages: " + defaultPhotoBook.GetNumberPages());

            PhotoBook customPhotoBook = new PhotoBook(24);
            Console.WriteLine("Custom Photo Book Pages: " + customPhotoBook.GetNumberPages());

            BigPhotoBook largePhotoBook = new BigPhotoBook();
            Console.WriteLine("Large Photo Book Pages: " + largePhotoBook.GetNumberPages());
        }
    }
}


