using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace GeneralDynamic.Web.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        public DateTime AddedOn { get; set; }
        public bool IsActive { get; set; }
        public string FullName { get; set; }
        public byte[] UserPhoto { get; set; }
        public virtual ICollection<Notification> Notifications { get; set; } = new List<Notification>();

    }
    public class Notification
    {
        [Key]
        public Guid NotificationId { get; set; }
        public NotificationType NotificationType { get; set; }
        public bool Seen { get; set; }
        public string Message { get; set; }
        public DateTime DateTime { get; set; }



    }

    public enum NotificationType
    {
        ComputersRelated = 0,
        GateKeeperUserRelated = 1,
        LogsRelated = 2,
        ScansRelated = 3,
        LicenseRelated = 4,
        SettingsRelated = 5,
        GatekeeperUserRelated = 6,
        JwtTokenRelated = 7,
        ClientSoftwareRelated = 8,
        General = 9


    }
}
