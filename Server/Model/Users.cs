using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Model
{
    public class Users
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public TypeOfContact ContactType { get; set; }
        public string Email { get; set; }

        public int AddressId { get; set; }
        [ForeignKey("Address")]
        public Address Address { get; set; }

    }
}
