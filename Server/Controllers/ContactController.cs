using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Model;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public ContactController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpPost("addContact")]
        public IActionResult addContact([FromBody] Users user)
        {
            if(user == null)
            {
                return BadRequest(new {message = "Please enter the values"});
            }
            if(!ModelState.IsValid)
            {
                return BadRequest(new { message = "Please enter all the values properly" });
            }
            _db.contacts.Add(user);
            _db.SaveChanges();
            return Ok(user);
        }

        [HttpGet("getAllContact")]
        public IActionResult getAllContact()
        {
            var contactList =  _db.contacts.ToList();
            
            return Ok(contactList);
        }

        [HttpGet("{id:int}")]
        public IActionResult getContactById(int id)
        {
            var contact = _db.contacts.Find(id);
            if(contact == null)
            {
                return NotFound();
            }
            return Ok(contact);
        }

/*        [HttpPatch("updateContact")]
        public IActionResult updateContact([FromBody] int Id,[FromBody] Users users )
        {

        }*/
    }
}
