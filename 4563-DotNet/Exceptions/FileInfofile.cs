using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exceptions
{
    internal class FileInfofile
    {
        public void fileInfo()
        {
            FileInfo f;
            f = new FileInfo(@"D:\4563-DotNet\Sample.txt");
            Console.WriteLine("Exists: " + f.Exists);
            if (f.Exists)
            {
                Console.WriteLine("Full name: " + f.FullName);
                Console.WriteLine("Name: " + f.Name);
                Console.WriteLine("Directory name: " + f.DirectoryName);
                Console.WriteLine("Extension: " + f.Extension);
                Console.WriteLine("Creation date and time: " + f.CreationTime);
                Console.WriteLine("Modification date and time: " +
               f.LastWriteTime);
                Console.WriteLine("Access date and time: " + f.LastAccessTime);
                Console.WriteLine("Length: " + f.Length + " bytes");
            }
            Console.ReadKey();
        }
    }
}
