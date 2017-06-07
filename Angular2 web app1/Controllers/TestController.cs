using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular2_web_app1.Controllers
{
    public class TestController : ApiController
    {
        [HttpGet]
        public object Get()
        {
            return new { from = "Web Api" };
        }
    }
}