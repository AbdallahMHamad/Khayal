using Microsoft.EntityFrameworkCore;
namespace Khayal.Data.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions options) : base(options)
    {
    }

    //Tables
}
