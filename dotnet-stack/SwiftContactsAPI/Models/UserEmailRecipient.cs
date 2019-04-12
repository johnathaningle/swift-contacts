using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwiftContactsAPI.Models
{
    public class UserEmailRecipient
    {
        public int Id { get; set; }
        public Contact Contact { get; set; }
        public Email Email { get; set; }
    }
}
