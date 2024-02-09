

using Core.Entities;

namespace Core.Specifications
{
    public class FilteredProductsForCountSpecification : Specification<Product>
    {
        public FilteredProductsForCountSpecification(ProductSpecParameters parameters)
             : base(x =>
             (string.IsNullOrEmpty(parameters.search)|| x.Name.ToLower().Contains(parameters.search))&&
             (!parameters.brandId.HasValue||x.ProductBrandId==parameters.brandId)&&
             (!parameters.typeId.HasValue||x.ProductTypeId==parameters.typeId))
        {
            
        }
    }
}
