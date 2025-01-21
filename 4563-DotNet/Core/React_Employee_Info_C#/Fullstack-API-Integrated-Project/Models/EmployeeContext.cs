using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DEmployeeManagementSystem.Models
{
    public class EmployeeContext:DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }
    }
}
