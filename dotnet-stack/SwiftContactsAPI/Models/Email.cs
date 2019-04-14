using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwiftContactsAPI.Models
{
    public class Email
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        public int? EmailTemplateId { get; set; }
        public EmailTemplate EmailTemplate { get; set; }
        public List<UserEmail> UserEmails { get; set; }
        public List<EmailKeyword> EmailKeywords { get; set; }
        public List<UserEmailRecipient> UserEmailRecipients { get; set; }

    }
}
