using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OopsDemo
{
    public abstract class Customer
    {
        public string Name { get; set; }
        public string Cid { get; set; }
        public decimal TotalAmount { get; set; }
        public abstract string GetTotalAmont();

    }
    public class SavingsAccount : Customer
    {
        public override string GetTotalAmont()
        {
            return "Saving Account Balance is " + TotalAmount;
        }
        public string branchAddress()
        {
            return "Branch Address is Chennai";
        }

    }
    public class CurrentAccount : Customer
    {
        public override string GetTotalAmont()
        {
            return "Total Amount is "+TotalAmount;
        }
    }
}
