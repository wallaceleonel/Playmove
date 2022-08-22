using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CompanhiaProvisorApi.Data;
using CompanhiaProvisorApi.Models;
using System.Net;

namespace CompanhiaProvisorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        private readonly DataContext _context;

        public CompaniesController(DataContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Buscar todas as companhias  disponíveis.
        /// </summary>  
        /// <returns>Retorna todas as companhias  disponíveis</returns>
        /// <response code="200">Retorna todas as companhias  disponíveis</response>
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Company>>> GetCompanys()
        {
          if (_context.Companys == null)
          {
              return NotFound();
          }
            return await _context.Companys.ToListAsync();
        }

        /// <summary>
        /// Buscar todas as companhias  disponíveis pelo ID.
        /// </summary>  
        /// <returns>Retorna todas as companhias  disponíveis</returns>
        /// <response code="200">Retorna todas as companhias  disponíveis</response>
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Company>> GetCompany(int id)
        {
          if (_context.Companys == null)
          {
              return NotFound();
          }
            var company = await _context.Companys.FindAsync(id);

            if (company == null)
            {
                return NotFound();
            }

            return company;
        }

        /// <summary>
        /// Edita  companhia informando o ID .
        /// </summary>  
        /// <returns>Retorna edição da companhia</returns>
        /// <response code="200">Retorna dados da companhia atualizado</response>
        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompany(int id, Company company)
        {
            if (id != company.Id)
            {
                return BadRequest();
            }

            _context.Entry(company).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyExists(id))
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
        /// Insere dados  para cadastro de  companhia.
        /// </summary>  
        /// <returns>Retorna dados da  companhia cadastrada. </returns>
        /// <response code="200">Retorna dados da  companhia  cadastrada. </response>
        
        [HttpPost]
        public async Task<ActionResult<Company>> PostCompany(Company company)
        {
          if (_context.Companys == null)
          {
              return Problem("Entity set 'DataContext.Companys'  is null.");
          }
            _context.Companys.Add(company);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompany", new { id = company.Id }, company);
        }

        /// <summary>
        /// Deleta dados da companhia.
        /// </summary>  
        /// <returns>Retorna aviso de remoção dos dados.</returns>
        /// <response code="200">Retorna aviso de status de remoção de dados.</response>
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompany(int id)
        {
            if (_context.Companys == null)
            {
                return NotFound();
            }
            var company = await _context.Companys.FindAsync(id);
            if (company == null)
            {
                return NotFound();
            }

            _context.Companys.Remove(company);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CompanyExists(int id)
        {
            return (_context.Companys?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
