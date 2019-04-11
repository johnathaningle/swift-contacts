using Microsoft.EntityFrameworkCore;
using SwiftContactsAPI.Models;

namespace SwiftContactsAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
    }
}