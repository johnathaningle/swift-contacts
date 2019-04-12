using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
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
        private readonly IConfiguration _config;
        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _repo = repo;
            _config = config;
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

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
            userForLoginDto.Username = userForLoginDto.Username.ToLower();
            var userFromRepoo = await _repo.Login(userForLoginDto.Username, userForLoginDto.Password);
            if (userFromRepoo == null)
                return Unauthorized();
            //the user exists, create the web token
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepoo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepoo.Username)
            };
            //in order for the server to make sure the token is valid, create the security key
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            //create the descriptor which will contain the expiration date and the signing credentials
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };
            //create a token handler
            var tokenHandeler = new JwtSecurityTokenHandler();
            //create the token
            var token = tokenHandeler.CreateToken(tokenDescriptor);
            //return the token
            return Ok(new
            {
                token = tokenHandeler.WriteToken(token)
            });
        }

    }
}
