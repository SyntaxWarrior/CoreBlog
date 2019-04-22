using System;
using System.Collections.Generic;
using System.Text;
using CoreBlog.Data.Tables;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CoreBlog.Data
{

    // Run this command to create the database for first time use (if it does not exist).
    // dotnet ef migrations add InitialCreate

    // run this if the database exists and you want to update the data structure.
    // dotnet ef database update

    public class BlogContext : IdentityDbContext
    {
        public DbSet<Post> Posts { get; set; }

        public BlogContext(DbContextOptions<BlogContext> options)
            : base(options)
        {
        }
    }
}
