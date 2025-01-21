using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DotNetAss24_12_2024;

namespace DotNetAss24_12_2024
{
    internal class PhotoBook
    {
        private int numPages;

        public PhotoBook()
        {
            numPages = 16;
        }
        public PhotoBook(int pages)
        {
            numPages = pages;
        }

        public int GetNumberPages()
        {
            return numPages;
        }
    }

    class BigPhotoBook : PhotoBook
    {

        public BigPhotoBook() : base(64)
        {
        }
    }
}

//class PhotoBookTest
//{
//    static void Main(string[] args)
//    {
//        PhotoBook defaultPhotoBook = new PhotoBook();
//        Console.WriteLine("Default Photo Book Pages: " + defaultPhotoBook.GetNumberPages());

//        PhotoBook customPhotoBook = new PhotoBook(24);
//        Console.WriteLine("Custom Photo Book Pages: " + customPhotoBook.GetNumberPages());

//        BigPhotoBook largePhotoBook = new BigPhotoBook();
//        Console.WriteLine("Large Photo Book Pages: " + largePhotoBook.GetNumberPages());
//    }
//}

