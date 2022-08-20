using System.ComponentModel.DataAnnotations;

namespace CompanhiaProvisorApi.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string FantasyName { get; set; } = string.Empty;
        [Required, MaxLength(2)]
        public string Uf { get; set; } = string.Empty;
        [Required, MaxLength(14),MinLength(14)]
        public int Cnpj { get; set; }
        public List<Provider>? Providers { get; set; }
    }
}
