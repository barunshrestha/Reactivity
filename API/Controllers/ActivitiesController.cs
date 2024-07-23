using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace API.Controllers
{    
    public class ActivitiesController : BaseAPIController
    {
        private readonly ILogger<ActivitiesController> _logger;
      
        private readonly DataContext _context;

        public ActivitiesController(DataContext context, ILogger<ActivitiesController> logger)
        {
            _context = context;            
            _logger = logger;
        }

        [HttpGet] //api/activities   
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }           

        [HttpGet("{id}")]  //api/activities/fssf
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await _context.Activities.FindAsync(id);
        }
    }
}