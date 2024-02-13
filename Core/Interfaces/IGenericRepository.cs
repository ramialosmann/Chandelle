

using Core.Entities;
using Core.Specifications;

namespace Core.Interfaces
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        Task<T> GetByIdAsync(int id);
        Task<IReadOnlyList<T>> ListAllAsync();

        Task<T> GetEntityWithSpecificationAsync (ISpecification<T> specification);

        Task<IReadOnlyList<T>> ListWithSpecifiationsAsync (ISpecification<T> specification);

        Task<int> CountAsync(ISpecification<T> specification);


    }
}
