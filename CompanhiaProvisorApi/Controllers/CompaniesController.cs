﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CompanhiaProvisorApi.Data;
using CompanhiaProvisorApi.Models;
using CompanhiaProvisorApi.DTO;
using System.Data.Common;

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

        // GET: api/Companies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Company>>> GetCompany()
        {
          if (_context.Company == null)
          {
              return NotFound();
          }
            return await _context.Company.ToListAsync();
        }

        // GET: api/Companies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Company>> GetCompany(int id)
        {
          if (_context.Company == null)
          {
              return NotFound();
          }
            var company = await _context.Company.FindAsync(id);

            if (company == null)
            {
                return NotFound();
            }

            return company;
        }

        // PUT: api/Companies/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompany(int id, CompanyDTO company)
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

        // POST: api/Companies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ICollection<Company>>> PostCompany(CompanyDTO request)
        {
          if (_context.Company == null)
          {
                return NotFound();
          }
            var newComapany = new Company
            {
                FantasyName = request.FantasyName,
                Cnpj = request.Cnpj,
                Uf = request.Uf,
            };
            _context.Company.Add(newComapany);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompany", new { id = request.Id }, request);
        }

        // DELETE: api/Companies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompany(int id)
        {
            if (_context.Company == null)
            {
                return NotFound();
            }
            var company = await _context.Company.FindAsync(id);
            if (company == null)
            {
                return NotFound();
            }

            _context.Company.Remove(company);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CompanyExists(int id)
        {
            return (_context.Company?.Any(e => e.Id == id)).GetValueOrDefault();
        }
        private bool CompanyRegistry(int Cnpj)
        {

            return (_context.Company?.Any(e => e.Cnpj == Cnpj)).GetValueOrDefault();
        }
    }
}
