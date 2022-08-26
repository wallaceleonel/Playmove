using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CompanhiaProvisorApi.Models
{
    public class Provider
    {
        public int Id { get; set; }
        [ForeignKey("CompanyId")]
        [JsonIgnore]
        public Company ?Company { get; set; }
        public int CompanyId { get; set; }

        public string Name { get; set; } = string.Empty;
        [MaxLength(11)]
        public int Phone { get; set; }
        [MaxLength(14),MinLength(8)]
        public int Document { get; set; }
        public DateTime Date { get; set; }
    }
}
