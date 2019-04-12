using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SwiftContactsAPI.Models;

namespace SwiftContactsAPI.Models
{
    public class EmailTemplateType
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public List<EmailTemplate> EmailTemplates { get; set; }

    }
}
