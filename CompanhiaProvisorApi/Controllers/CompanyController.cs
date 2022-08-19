using Microsoft.AspNetCore.Mvc;

namespace CompanhiaProvisorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        [HttpGet("{Id}")]
    }
}
