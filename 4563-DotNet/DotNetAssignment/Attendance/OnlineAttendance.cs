using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Attendance
{
    public delegate void BannedUserEventHandler(string userName);
    public class OnlineAttendance
    {
        public event BannedUserEventHandler OnBannedUserDetected;

         
        private readonly HashSet<string> bannedUsers = new HashSet<string> { "Jack", "Steven", "Mathew" };

        public void RegisterAttendance(string userName)
        {
            if (bannedUsers.Contains(userName))
            {
                OnBannedUserDetected?.Invoke(userName);
            }
            else
            {
                Console.WriteLine($"Welcome {userName}");
            }
        }
    }
    public class AlarmSystem
    {
        public void TriggerAlarm(string userName)
        {
            Console.WriteLine($"Alarm triggered.Banned User!!");
        }
    }

    public class EmailSystem
    {
        public void SendEmailToAdmin(string userName)
        {
            Console.WriteLine($"Mail :Banned User found ..");
        }
    }
}
