using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwiftContactsAPI.Models
{
    public class EmailKeyword
    {
        public int Id { get; set; }
        public string Keyword { get; set; }
        public Email Email { get; set; }
    }
}
