using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class AchivmentsDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Achivment> Achivments { get; set; }

        public AchivmentsDbContext(DbContextOptions options) : base(options) { }
    }
}
