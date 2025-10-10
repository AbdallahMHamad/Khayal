using Khayal.Core.Models;
using Khayal.Data.Data;
using Khayal.Data.Repositories;

namespace Khayal.Data.UnitOfWork;

public class UnitOfWork : IUnitOfWork
{
    private readonly AppDbContext _appDbContext;

    public IGenericRepository<Role> Roles { get; }
    public IGenericRepository<User> Users { get; }

    public UnitOfWork(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
        Roles = new GenericRepository<Role>(_appDbContext);
        Users = new GenericRepository<User>(_appDbContext);
    }

    public async Task SaveChangesAsync() => await _appDbContext.SaveChangesAsync();
}
