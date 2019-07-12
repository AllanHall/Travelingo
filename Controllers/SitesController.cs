using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using travelingo.models;
using travelingo;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace travelingo.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SitesController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public SitesController(DatabaseContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Site>>> GetAllSites()
    {
      return await _context.Sites.ToListAsync();
    }

    [HttpGet("language")]
    public async Task<ActionResult<List<Site>>> GetSitesByLanguage([FromQuery] string language)
    {
      var rv = _context.Sites.Where(w => w.Language.ToLower().Contains(language.ToLower()));
      return await rv.ToListAsync();
    }

    [HttpPost]
    [Authorize]
    public async Task<ActionResult<Site>> PostNewSite(Site site)
    {
      _context.Sites.Add(site);
      await _context.SaveChangesAsync();
      return site;
    }

    [HttpPut("{id}")]

    public async Task<ActionResult<Site>> UpdateSite(int id, [FromBody]Site updatedSite)
    {
      var oldSite = await _context.Sites.FirstOrDefaultAsync(f => f.id == id);
      oldSite.LocationName = updatedSite.LocationName;
      oldSite.Address = updatedSite.Address;
      oldSite.State = updatedSite.State;
      oldSite.WebsiteUrl = updatedSite.WebsiteUrl;
      oldSite.Description = updatedSite.Description;
      oldSite.Latitude = updatedSite.Latitude;
      oldSite.Longitude = updatedSite.Longitude;
      oldSite.Language = updatedSite.Language;
      await _context.SaveChangesAsync();
      return updatedSite;
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Site>> DeleteSite(int id)
    {
      var oldSite = await _context.Sites.FindAsync(id);
      if (oldSite == null)
      {
        return NotFound();
      }

      _context.Sites.Remove(oldSite);
      await _context.SaveChangesAsync();
      return oldSite;
    }
  }
}