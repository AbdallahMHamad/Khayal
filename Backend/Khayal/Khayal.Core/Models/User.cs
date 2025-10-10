using System.ComponentModel.DataAnnotations;
namespace Khayal.Core.Models;

public class User
{
    public int Id { get; set; }

    [Required]
    [MaxLength(25)]
    public string UserName { get; set; } = null!;

    [Required]
    [EmailAddress]
    public string EmailAddress { get; set; } = null!;

    [Required]
    [MinLength(6)]
    public string PasswordHashed { get; set; } = null!;

    public int RoleId { get; set; }

    //Navigation Properties
    public Role Role { get; set; } = null!;
}
