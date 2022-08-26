using CompanhiaProvisorApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CompanhiaProvisorApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<Company> Company { get; set; }
        public DbSet<Provider> Provider { get; set; }
    }
}
