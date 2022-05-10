using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Server.Model
{
    public class Users
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [DataType(DataType.PhoneNumber)]
        [RegularExpression(@"^[0-9]{10}",ErrorMessage ="Invalid Mobile Number")]
        public string PhoneNumber { get; set; }
        public TypeOfContact ContactType { get; set; }
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [JsonIgnore]
        public int AddressId { get; set; }
        public Address Address { get; set; }

    }
}
