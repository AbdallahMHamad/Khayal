using Khayal.Data.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Khayal.Data.Repositories;

public class GenericRepository<T> : IGenericRepository<T> where T : class
{
    private readonly AppDbContext _appDbContext;
    private readonly DbSet<T> _dbSet;
    
    public GenericRepository(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
        _dbSet = _appDbContext.Set<T>();
    }

    //CRUD
    public async Task<List<T>> GetAllAsync()
    {
        return await _dbSet.ToListAsync();
    }

    public async Task<T?> GetByIdAsync(int id)
    {
        return await _dbSet.FindAsync(id);
    }

    public async Task CreateAsync(T entity)
    {
        await _dbSet.AddAsync(entity);
    }

    public async Task DeleteAsync(T entity)
    {
        _dbSet.Remove(entity);
        await Task.CompletedTask;
    }

    //Finding
    public async Task<List<T>> GetAllAsync(Expression<Func<T, bool>> predicate)
    {
        return await _dbSet.Where(predicate).ToListAsync();
    }

    public async Task<T?> GetFirstOrDefaultAsync(Expression<Func<T, bool>> predicate)
    {
        return await _dbSet.FirstOrDefaultAsync(predicate);
    }

    public async Task<bool> AnyAsync(Expression<Func<T, bool>> predicate)
    {
        return await _dbSet.AnyAsync(predicate);
    }
}
