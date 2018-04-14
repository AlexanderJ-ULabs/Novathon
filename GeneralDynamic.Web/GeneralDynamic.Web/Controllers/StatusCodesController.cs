using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

 namespace GeneralDynamic.Web.Controllers
{
   [Authorize]
    public class StatusCodesController : Controller
    {
        private readonly ILogger<StatusCodesController> _logger;
        public StatusCodesController(ILogger<StatusCodesController> logger)
         
        {
            
            _logger = logger;

        }

        // GET: /<controller>/

        [HttpGet("/StatusCodes/{statusCode}")]
        public IActionResult Index(int statusCode)

        {
            try
            {
                var reExecute = HttpContext.Features.Get<IStatusCodeReExecuteFeature>();
                if (statusCode == 500)
                {
                    _logger.LogInformation($"Unexpected Status Code: {statusCode}, OriginalPath: {reExecute.OriginalPath}");
                    return View("DatabaseError");
                }
                _logger.LogInformation($"Unexpected Status Code: {statusCode}, OriginalPath: {reExecute.OriginalPath}");
                return View(statusCode);
            }
            catch (Exception e)
            {
              return BadRequest();
            }

        }
        [AllowAnonymous]
        [HttpGet]
        public IActionResult DatabaseError()
        {
            return View();

        }






    }
}