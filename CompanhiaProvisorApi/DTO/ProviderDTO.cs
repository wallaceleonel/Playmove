namespace CompanhiaProvisorApi.DTO
{
    public class ProviderDTO
    {
        public string Name { get; set; } = string.Empty;
        public int Document { get; set; }
        public int Phone { get; set; }
        public DateTime Date { get; set; }
        public int CompanyId { get; set; }
    }
}
