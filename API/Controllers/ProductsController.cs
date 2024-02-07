
using API.DTOs;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly IGenericRepository<Product> _productRepo;
        private readonly IGenericRepository<ProductBrand> _productBrandRepo;
        private readonly IGenericRepository<ProductType> _productTypeRepo;
        private readonly IMapper _mapper;

        public ProductsController(IGenericRepository<Product> productRepo , 
                                  IGenericRepository<ProductBrand> productBrandRepo , 
                                  IGenericRepository<ProductType> productTypeRepo ,
                                  IMapper mapper)
        {
            _productRepo=productRepo;
            _productBrandRepo=productBrandRepo;
            _productTypeRepo=productTypeRepo;
            _mapper=mapper;
        }


        [HttpGet]

        public async Task<ActionResult<Pagination<ProductDto>>>GetProducts([FromQuery]ProductSpecParameters parameters)
        {
            var includes = new IncludeTypeAndBrandsForProducts(parameters);
            var count = new FilteredProductsForCountSpecification(parameters);
            var totalItems = await _productRepo.CountAsync(count);
            var products = await _productRepo.ListWithSpecifiationsAsync(includes);
            var productsToReturn = _mapper.Map<List<ProductDto>>(products); 

            return Ok(new Pagination<ProductDto>(parameters.PageIndex ,parameters.PageSize ,
                totalItems, productsToReturn));
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<ProductDto>> GetProductById(int id)
        {
            var whereSpecification = new IncludeTypeAndBrandsForProducts(id);
            var product = await _productRepo.GetEntityWithSpecificationAsync(whereSpecification);
            var productToReturn = _mapper.Map<Product ,ProductDto>(product);

            return productToReturn;
        }

        [HttpGet("brands")]

        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
        {
            return Ok(await _productBrandRepo.ListAllAsync());
        }

        [HttpGet("types")]

        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes( )
        {
            return Ok(await _productTypeRepo.ListAllAsync());
        }
    }
}
