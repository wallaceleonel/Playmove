using CompanhiaProvisorApi.Models;
using System.ComponentModel.DataAnnotations;

namespace CompanhiaProvisorApi.DTO
{
    public class CompanyDTO
    {
        [Required]
        public string FantasyName { get; set; } = string.Empty;
        [Required, MaxLength(2)]
        public string Uf { get; set; } = string.Empty;
        [Required, MaxLength(14), MinLength(14)]
        public int Cnpj { get; set; }
        public List<Provider>? Providers { get; set; }
    }
}
