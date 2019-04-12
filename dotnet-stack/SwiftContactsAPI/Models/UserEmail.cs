using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwiftContactsAPI.Models
{
    public class UserEmail
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int EmailId { get; set; }
        public Email Email { get; set; }

    }
}
