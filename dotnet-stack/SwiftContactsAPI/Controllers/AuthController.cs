using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SwiftContactsAPI.Data;
using SwiftContactsAPI.Dtos;
using SwiftContactsAPI.Models;

namespace SwiftContactsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult RegisterPage()
        {
            string values = "hello world";
            return Ok(values);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {
            //the dto class is used for recieving json objects from the web app
            //validate the request

            //send username to database
            //convert username to lowercase for consitency
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
            if (await _repo.UserExists(userForRegisterDto.Username))
                return BadRequest("Username already exists");

            var userToCreate = new User { Username = userForRegisterDto.Username };
            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);
            return StatusCode(201);
        }

    }
}
