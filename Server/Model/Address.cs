using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Server.Model
{
    public class Address
    {
        [JsonIgnore]
        public int AddressId { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string Town { get; set; }
        public string Pincode { get; set; }
    }
}
