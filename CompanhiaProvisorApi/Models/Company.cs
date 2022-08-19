using System.ComponentModel.DataAnnotations;

namespace CompanhiaProvisorApi.Models
{
    public class Company
    {
        [Key]
        public int CompanyId { get; set; }
        [Required]
        public string? FantasyName { get; set; }
        [Required, MaxLength(2)]
        public string? Uf { get; set; }
        [Required, MaxLength(14)]
        public int Cnpj { get; set; }
        public virtual Provider Provider { get; set; }
    }
}
