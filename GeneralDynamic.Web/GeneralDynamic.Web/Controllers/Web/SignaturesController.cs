﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GeneralDynamic.Web.Controllers.Web
{
    [Authorize]
    [Produces("application/json")]
    [Route("[controller]/[action]")]


    public class SignaturesController : Controller
    {







    }
}