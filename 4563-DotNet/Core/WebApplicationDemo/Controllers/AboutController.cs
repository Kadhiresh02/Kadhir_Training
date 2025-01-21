using Microsoft.AspNetCore.Mvc;

namespace WebApplicationDemo.Controllers
{
    public class AboutController : Controller
    {
        public string Index()
        {
            return "This is the Changepond ";
        }
        public IActionResult About()
        {
            return View();
        }
    }
}
