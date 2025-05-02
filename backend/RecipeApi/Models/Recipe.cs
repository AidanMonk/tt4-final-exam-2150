using System;
using System.ComponentModel.DataAnnotations;

namespace RecipeApi.Models
{
    public class Recipe
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Ingredients { get; set; } 
        public string Instructions { get; set; }
        public TimeSpan PrepTime { get; set; }
    }
}