using Microsoft.EntityFrameworkCore;
using SwiftContactsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwiftContactsAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<UserEmail> UserEmails { get; set; }
        public DbSet<Value> Values { get; set; }
        public DbSet<EmailTemplate> EmailTemplates { get; set; }
        public DbSet<EmailTemplateType> EmailTemplateTypes { get; set; }
        public DbSet<Email> Emails { get; set; }
        public DbSet<EmailKeyword> EmailKeywords { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<UserEmailRecipient> UserEmailRecipients { get; set; }

    }
}
