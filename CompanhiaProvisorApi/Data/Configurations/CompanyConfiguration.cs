//using CompanhiaProvisorApi.Models;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore.Metadata.Builders;

//namespace CompanhiaProvisorApi.Data.Configurations
//{
//    public class CompanyConfiguration : IEntityTypeConfiguration<Company>
//    {
//        public void Configure(EntityTypeBuilder<Company> builder)
//        {
//            builder.Property(c => c.FantasyName).HasMaxLength(50).IsRequired();
//            builder.Property(c => c.Cnpj).IsRequired();
//        }
//        public static void MapCompanyEndpoints(this IEndpointRouteBuilder routes)
//        {
//            routes.MapGet("/api/Company", () =>
//            {
//                return new[] { new Company() };
//            })
//            .WithName("GetAllCompanys");

//            routes.MapGet("/api/Company/{id}", (int id) =>
//            {
//                //return new Company { ID = id };
//            })
//            .WithName("GetCompanyById");

//            routes.MapPut("/api/Company/{id}", (int id, Company input) =>
//            {
//                return Results.NoContent();
//            })
//            .WithName("UpdateCompany");

//            routes.MapPost("/api/Company/", (Company model) =>
//            {
//                //return Results.Created($"/Companys/{model.ID}", model);
//            })
//            .WithName("CreateCompany");

//            routes.MapDelete("/api/Company/{id}", (int id) =>
//            {
//                //return Results.Ok(new Company { ID = id });
//            })
//            .WithName("DeleteCompany");
//        }
//    }
//}
