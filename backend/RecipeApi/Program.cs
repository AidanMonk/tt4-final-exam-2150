using Microsoft.EntityFrameworkCore;
using RecipeApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<RecipeDbContext>(options =>
    options.UseSqlite("Data Source=recipes.db"));

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.MapControllers();

app.Run();
