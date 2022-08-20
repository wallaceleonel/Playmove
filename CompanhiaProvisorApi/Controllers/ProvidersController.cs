using CompanhiaProvisorApi.Data;
using CompanhiaProvisorApi.DTO;
using CompanhiaProvisorApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CompanhiaProvisorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProvidersController : ControllerBase
    {
        private readonly DataContext _context;

        public ProvidersController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Provider>>> Get(int CompanyId)
        {
            var providers = await _context.Providers
                .Where(x => x.CompanyId == CompanyId)
                .ToListAsync();
            return providers;
        }

        [HttpPost]
        public async Task<ActionResult<List<Provider>>> Create(CreateProviderDTO request)
        {
            var provider = await _context.Providers.FindAsync(request.CompanyId);
            if (provider == null)
                return NotFound();

            var newProvider = new Provider
            {
                Name = request.Name,
                Document = request.Document,
                Phone = request.Phone,
                DateCredential = request.DateCredential,
                
                Company = provider.Company
            };


            _context.Providers.Add(newProvider);
            await _context.SaveChangesAsync();

            return await Get(newProvider.CompanyId);
        }
    }
}
