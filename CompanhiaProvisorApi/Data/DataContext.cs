using Microsoft.EntityFrameworkCore;

namespace CompanhiaProvisorApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
    }
}
