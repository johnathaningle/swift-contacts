using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SwiftContactsAPI.Dtos
{
    //this is the data trasfer object that recieves the data for the register method in AuthController
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(20, MinimumLength =8, ErrorMessage ="Password must be between 8 and 20 characters")]
        public string Password { get; set; }

    }

    public class UserForLoginDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
