using System.ComponentModel.DataAnnotations;

namespace CompanhiaProvisorApi.Models
{
    public class Provider
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        [MaxLength(11)]
        public int Phone { get; set; }
        [MaxLength(14),MinLength(8)]
        public int Document { get; set; }
        public DateTime DateCredential { get; set; }

        public Company Company { get; set; }

        public int CompanyId { get; set; }

    }
}
