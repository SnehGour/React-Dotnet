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

             var address = user.Address;
             var obj =  _db.addresses.FirstOrDefault(x => x.State.ToLower() == address.State.ToLower()
                && x.Town.ToLower() == address.Town.ToLower() && x.Country.ToLower() == address.Country.ToLower()
                && x.Pincode.ToLower() == address.Pincode.ToLower());
            
            if(obj != null)
            {
                user.Address = obj;
            }
            _db.contacts.Add(user);
            _db.SaveChanges();
            return Ok(user);
        }

        [HttpGet("getAllContact")]
        public IActionResult getAllContact()
        {
            var contactList =  _db.contacts.ToList();
            foreach(var contact in contactList)
            {
                var addressId = contact.AddressId;
                 var address = _db.addresses.Find(addressId);
                contact.Address = address;
            }
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

        [HttpDelete("{id:int}")]
        public IActionResult deleteContact(int id)
        {
            var obj = _db.contacts.Find(id);
            _db.contacts.Remove(obj);
            _db.SaveChanges();
            return Ok(obj);
        }
/*        [HttpPatch("updateContact")]
        public IActionResult updateContact([FromBody] int Id,[FromBody] Users users )
        {

        }*/
    }
}
