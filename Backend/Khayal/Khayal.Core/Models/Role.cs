using System.ComponentModel.DataAnnotations;
namespace Khayal.Core.Models;

public class Role
{
    public int Id { get; set; }

    [Required]
    public string Name { get; set; } = null!;

    //Navigation Properties
    public ICollection<User> Users { get; set; } = new List<User>();
}
