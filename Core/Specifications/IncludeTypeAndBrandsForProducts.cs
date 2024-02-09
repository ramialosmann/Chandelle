using Core.Entities;


namespace Core.Specifications
{
    public class IncludeTypeAndBrandsForProducts : Specification<Product>
    {
        public IncludeTypeAndBrandsForProducts(ProductSpecParameters parameters )
            : base(x => 
             (string.IsNullOrEmpty(parameters.search) || x.Name.ToLower().Contains(parameters.search)  ) &&
             (!parameters.brandId.HasValue || x.ProductBrandId == parameters.brandId) && 
             (!parameters.typeId.HasValue || x.ProductTypeId == parameters.typeId) )
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
            AddOrderBy(x => x.Name);
            AddPagination(parameters.PageSize * (parameters.PageIndex - 1) , parameters.PageSize);

            if(!string.IsNullOrEmpty(parameters.sort))
            {
                switch  (parameters.sort )
                {
                    case "priceAsc":
                        AddOrderBy(x => x.Price); break;
                    case "priceDesc":
                        AddOrderByDescending(x => x.Price); break;
                    default:
                        AddOrderBy(x => x.Name); break;
                }
            }
        }

        public IncludeTypeAndBrandsForProducts(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }
    }
}
