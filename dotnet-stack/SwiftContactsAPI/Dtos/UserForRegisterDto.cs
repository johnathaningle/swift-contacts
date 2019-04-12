using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwiftContactsAPI.Dtos
{
    //this is the data trasfer object that recieves the data for the register method in AuthController
    public class UserForRegisterDto
    {
        public string Username { get; set; }
        public string Password { get; set; }

    }
}
