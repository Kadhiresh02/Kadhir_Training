using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    namespace Banking
    {
        partial class BanckAccount
        {
            public int AccNo = 1234;
            public string accname = "Kadhir";
            public double cbalance  ;
            public double deposit(double amt)
            {
              return  cbalance += amt;
            }
        }
    }
}