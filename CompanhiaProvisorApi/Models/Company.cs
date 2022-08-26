using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CompanhiaProvisorApi.Models
{
    public class Company
    {
        public int Id { get; set; }
        [Required]
        public string FantasyName { get; set; } = string.Empty;
        [Required, MaxLength(2)]
        public string Uf { get; set; } = string.Empty;
        [Required, MaxLength(15),MinLength(14)]
        public int Cnpj { get; set; }
        public ICollection<Provider> Providers { get; set; }
    }
}
