using Microsoft.EntityFrameworkCore;

namespace CompanhiaProvisorApi.Models
{
    public class _DbContext : DbContext
    {
        public _DbContext(DbContextOptions<_DbContext> options) : base(options)
        {}
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
        public DbSet<Company> Companys { get; set;}
        public DbSet<Provider> Providers { get; set;}
    }
}
