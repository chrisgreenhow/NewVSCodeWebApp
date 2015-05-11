using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using NewVSCodeWebApp.Models;
using System.Diagnostics;

namespace NewVSCodeWebApp.Controllers.Controllers
{
        [Route("api/[controller]")]
        public class ProcessesController : Controller
        {
                // GET: api/values
                [HttpGet]
                public IEnumerable<ProcessInfo> Get()
                {
                        var processList = Process.GetProcesses().OrderBy(p => p.ProcessName).ToList();

                        return processList.Select(p => new ProcessInfo() { Name = p.ProcessName });
                }
        }
}