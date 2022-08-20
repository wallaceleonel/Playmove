namespace CompanhiaProvisorApi.DTO
{
    public class CreateProviderDTO
    {
        public int CompanyId { get; set; }
        public string Name { get; set; }

        public int Document { get; set; }
        public int Phone { get; set; }

        public DateTime DateCredential { get; set; }

    }
}
