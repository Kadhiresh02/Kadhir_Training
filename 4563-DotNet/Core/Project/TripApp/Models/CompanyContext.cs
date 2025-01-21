using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace TripApp.Models
{
    public class CompanyContext : DbContext
    {
        public CompanyContext(DbContextOptions<CompanyContext> options) : base(options) { }
        public DbSet<Reservation> Reservation { get; set; }
    }
}