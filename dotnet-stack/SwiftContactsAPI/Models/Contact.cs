using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwiftContactsAPI.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public User User { get; set; }
    }
}
