using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CompanhiaProvisorApi.Data;
using CompanhiaProvisorApi.Models;
using CompanhiaProvisorApi.DTO;

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

        // GET: api/Providers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Provider>>> GetProvider()
        {
          if (_context.Provider == null)
          {
              return NotFound();
          }
            return await _context.Provider.ToListAsync();
        }

        // GET: api/Providers/id
        [HttpGet("{id}")]
        public async Task<ActionResult<Provider>> GetProvider(int id)
        {
          if (_context.Provider == null)
          {
              return NotFound();
          }
            var provider = await _context.Provider.FindAsync(id);

            if (provider == null)
            {
                return NotFound();
            }

            return provider;
        }

        // PUT: api/Providers/id
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProvider(int id, Provider provider)
        {
            if (id != provider.Id)
            {
                return BadRequest();
            }

            _context.Entry(provider).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProviderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Providers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ICollection<Provider>>> PostProvider(ProviderDTO request)
        {
            var company = await _context.Company.FindAsync(request.CompanyId);
            if (company == null)
                return NotFound();

            var newProvider = new Provider
            {
                Name = request.Name,
                Document = request.Document,
                Phone = request.Phone,
                Company = company
            };
          
            _context.Provider.Add(newProvider);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProvider", new { id = request.CompanyId }, request);
        }

        // DELETE: api/Providers/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProvider(int id)
        {
            if (_context.Provider == null)
            {
                return NotFound();
            }
            var provider = await _context.Provider.FindAsync(id);
            if (provider == null)
            {
                return NotFound();
            }

            _context.Provider.Remove(provider);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProviderExists(int id)
        {
            return (_context.Provider?.Any(e => e.Id == id)).GetValueOrDefault();
        }
        private bool ProviderRegistry(int Document)
        {

            return (_context.Provider?.Any(e => e.Document == Document)).GetValueOrDefault();
        }
    }
}
