using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CompanhiaProvisorApi.Data;
using CompanhiaProvisorApi.Models;

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

        /// <summary>
        /// Buscar todos os fornecedores  disponíveis.
        /// </summary>  
        /// <returns>Retorna todos os fornecedores  disponíveis. </returns>
        /// <response code="200">Retorna todaos os fornecedores  disponíveis. </response>
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Provider>>> GetProviders()
        {
          if (_context.Providers == null)
          {
              return NotFound();
          }
            return await _context.Providers.ToListAsync();
        }

        /// <summary>
        /// Buscar  o fornecedoror  atraves do ID.
        /// </summary>  
        /// <returns>Retorna fornecedor atraves pelo ID. </returns>
        /// <response code="200">Retorna fornecedor do ID informado. </response>
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Provider>> GetProvider(int id)
        {
          if (_context.Providers == null)
          {
              return NotFound();
          }
            var provider = await _context.Providers.FindAsync(id);

            if (provider == null)
            {
                return NotFound();
            }

            return provider;
        }

        /// <summary>
        /// Edita  fornecedor informando o ID.
        /// </summary>  
        /// <returns>Retorna edição do fornecedor.</returns>
        /// <response code="200">Retorna dados do fornecedor atualizado.</response>
        
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

        /// <summary>
        /// Insere dados  para cadastro do fornecedor.
        /// </summary>  
        /// <returns>Retorna dados do fornecedor cadastrado. </returns>
        /// <response code="200">Retorna dados do fornecedor cadastrado. </response>

        [HttpPost]
        public async Task<ActionResult<Provider>> PostProvider(Provider provider)
        {
          if (_context.Providers == null)
          {
              return Problem("Entity set 'DataContext.Providers'  is null.");
          }
            _context.Providers.Add(provider);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProvider", new { id = provider.Id }, provider);
        }

        /// <summary>
        /// Deleta dados do fornecedor.
        /// </summary>  
        /// <returns>Retorna aviso de remoção dos dados do fornecedor.</returns>
        /// <response code="200">Retorna aviso de status de remoção de dados do fornecedor.</response>

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProvider(int id)
        {
            if (_context.Providers == null)
            {
                return NotFound();
            }
            var provider = await _context.Providers.FindAsync(id);
            if (provider == null)
            {
                return NotFound();
            }

            _context.Providers.Remove(provider);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProviderExists(int id)
        {
            return (_context.Providers?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
