

using API.DTOs;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Product, ProductDto>()
                    .ForMember(dest => dest.ProductBrand, opt => opt.MapFrom(src => src.ProductBrand.Name))
                    .ForMember(dest => dest.ProductType, opt => opt.MapFrom(src => src.ProductType.Name))
                    .ForMember(dest => dest.PictureUrl, opt => opt.MapFrom<ProductUrlResolver>());
        }
    }
}
