namespace CompanhiaProvisorApi.DTO
{
    public class ProviderDTO
    {
        public int CompanyId { get; set; }
        public string Name { get; set; } = string.Empty;

        public int Document { get; set; }
        public int Phone { get; set; }

        public DateTime DateCredential { get; set; }

    }
}
