using Khayal.Core.Models;
using Khayal.Data.Repositories;

namespace Khayal.Data.UnitOfWork;

public interface IUnitOfWork
{
    IGenericRepository<Role> Roles { get; }
    IGenericRepository<User> Users { get; }

    Task SaveChangesAsync();
}
