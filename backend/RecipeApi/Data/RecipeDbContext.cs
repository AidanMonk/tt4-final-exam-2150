using Microsoft.EntityFrameworkCore;
using RecipeApi.Models;

namespace RecipeApi.Data
{
    public class RecipeDbContext : DbContext
    {
        public RecipeDbContext(DbContextOptions<RecipeDbContext> options)
            : base(options)
        { }

        public DbSet<Recipe> Recipes { get; set; }
    }
}