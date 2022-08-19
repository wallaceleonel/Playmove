using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CompanhiaProvisorApi.Models
{

    [Table(name:"Provider")]
    public class Provider
    {
        public Provider()
        {
            this.Companys = new HashSet<Company>();
        }
        [Key]
        public int ProviderId { get; set; }
        [Required]
        public string? FantasyName { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public int Document { get; set; }

        public DateTime Date { get; set; }
        public virtual ICollection<Company> Companys { get; set; }  
    }
}
