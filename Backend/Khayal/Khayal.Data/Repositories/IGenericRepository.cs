using System.Linq.Expressions;

namespace Khayal.Data.Repositories;

public interface IGenericRepository<T> where T : class
{
    //CRUD
    Task<List<T>> GetAllAsync();
    Task<T?> GetByIdAsync(int id);
    Task CreateAsync(T entity);
    Task DeleteAsync(T entity);

    //Finding
    Task<List<T>> GetAllAsync(Expression<Func<T, bool>> predicate);
    Task<T?> GetFirstOrDefaultAsync(Expression<Func<T, bool>> predicate);
    Task<bool> AnyAsync(Expression<Func<T, bool>> predicate);
}
