using Khayal.Core.Models;
using Microsoft.EntityFrameworkCore;
namespace Khayal.Data.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions options) : base(options)
    {
    }

    //Tables
    public DbSet<Role> Roles { get; set; }
    public DbSet<User> Users { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        //cant delete the role if its has user
        modelBuilder.Entity<User>()
            .HasOne(u => u.Role)
            .WithMany(r => r.Users)
            .HasForeignKey(u => u.RoleId)
            .OnDelete(DeleteBehavior.Restrict);

        //unique email in the database
        modelBuilder.Entity<User>()
            .HasIndex(u => u.EmailAddress)
            .IsUnique();

        //Initial Roles
        modelBuilder.Entity<Role>().HasData(
            new Role { Id = 1, Name = "KhayalAdmin" },
            new Role { Id = 2, Name = "KhayalUser" }
        );
    }
}
