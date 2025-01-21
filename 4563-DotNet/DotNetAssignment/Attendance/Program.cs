
namespace Attendance
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            OnlineAttendance attendanceSystem = new OnlineAttendance();
            AlarmSystem alarmSystem = new AlarmSystem();
            EmailSystem emailSystem = new EmailSystem();

             
            attendanceSystem.OnBannedUserDetected += alarmSystem.TriggerAlarm;
            attendanceSystem.OnBannedUserDetected += emailSystem.SendEmailToAdmin;

             
            Console.WriteLine("Enter your name:");
            string userName = Console.ReadLine();

            
            attendanceSystem.RegisterAttendance(userName);

            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }
    }
}