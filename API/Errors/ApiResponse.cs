
namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = null)
        {
           StatusCode=statusCode;
           Message= message ?? GetApiResponse(statusCode);
        }

        public int StatusCode {  get; set; }
        public string Message { get; set; }

        private string GetApiResponse(int statusCode)
        {
            return statusCode switch
            {
                400 => "Trent alexander arnold to man city here we go (bad request)",
                401 => "New player to Prison FC here we go (unauthorized)",
                404 => "Luis Diaz's father for a week (not found)",
                500 => "I am not enough - poch (internal server error)",
                _ => null
            };
        }


    }
}
