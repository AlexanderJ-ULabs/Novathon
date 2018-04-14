using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GeneralDynamic.Web.Models;
using Microsoft.AspNetCore.Authorization;

namespace GeneralDynamic.Web.Controllers
{
    [Authorize]
    public class PagesController : Controller
    {
        [Route("")]
        public IActionResult Dashboard()
        {
            return View();
        }
        [Route("Accounts")]
        public IActionResult Accounts()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }
        [Route("Signatures")]
        public IActionResult Signatures()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
