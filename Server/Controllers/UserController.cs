using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Server.Data;
using Server.Model;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private readonly IConfiguration _configuration;
        public UserController(ApplicationDbContext db, IConfiguration configuration)
        {
            _db = db;
            _configuration = configuration;
        }

        [AllowAnonymous]
        [HttpPost("Authenticate")]
        public IActionResult Authenticate([FromBody] UserAuthentication user) 
        {
            var Obj = _db.userAuthentications.Any(x=>x.UserName == user.UserName && x.Password == user.Password); 
            if(!Obj)
            {
                return BadRequest(new { message = "Invalid Username and Password" });
            }
            else
            {
                // User is valid, Now generate Jwt Token

                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_configuration["JWT:Secret"]);

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(
                        new Claim[]
                        {
                            new Claim(ClaimTypes.Name,user.UserName)
                        })
                    ,
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),SecurityAlgorithms.HmacSha256Signature)
                };

                var token = tokenHandler.CreateToken(tokenDescriptor);
                var TokenObj = new Tokens
                {
                    Token = tokenHandler.WriteToken(token)
                };

                return Ok(TokenObj);
            }            
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult register([FromBody] UserAuthentication user)
        {
            if(user == null)
            {
                return BadRequest(new { messsage = "Please enter information properly" });
            }
            if (!_db.userAuthentications.Any(x => x.UserName == user.UserName && x.Password == user.Password))
            {
                _db.userAuthentications.Add(user);
                _db.SaveChanges();
            }
            return Ok(user);
        }

        [HttpGet("getAllUsers")]
        public IActionResult getAllUsers()
        {
            var userList = _db.userAuthentications.ToList();
            return Ok(userList);
        }
    }
}
