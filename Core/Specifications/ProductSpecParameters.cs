

namespace Core.Specifications
{
    public class ProductSpecParameters
    {
        private const int MaxPageSize = 20;

        public int PageIndex { get; set; } = 1;

        public int _pageSize = 6; //default

        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value;
        }


        public int? typeId { get; set; }
        public int? brandId { get; set; }

        public string sort { get; set; }
    }
}
