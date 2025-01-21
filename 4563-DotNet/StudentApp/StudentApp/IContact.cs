using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal interface IContact
    {
        public long Mobile {  get; set; }
        public string Email { get; set; }
        public string ShowContact();
    }
}
