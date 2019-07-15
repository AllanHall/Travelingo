using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using travelingo.services;
using travelingo.models;
using travelingo.viewmodels;


namespace travelingo.Controllers
{
  [ApiController]
  [Route("auth")]
  public class AuthController : ControllerBase
  {
    private DatabaseContext _context;
    private IAuthService _auth;
    public AuthController(DatabaseContext context, IAuthService authservice)
    {
      this._context = context;
      this._auth = authservice;
    }

    [HttpPost("login")]
    public async Task<ActionResult> LogIn([FromBody] RegisterViewModel loginInfo)
    {
      var user = await _context.Users.FirstOrDefaultAsync(f => f.UserName == loginInfo.Email);
      if (user == null)
      {
        return Unauthorized(new { message = "This user doesn't exist, sign up below!" });
      }
      else
      {
        if (this._auth.VerifyPassword(user, loginInfo.Password))
        {
          var rv = this._auth.CreateAuthData(user);
          return Ok(rv);
        }
        else
        {
          return Unauthorized();
        }
      }
    }

    [HttpPost("register")]
    public async Task<ActionResult> Register([FromBody] RegisterViewModel registerInfo)
    {
      var exists = await _context.Users.AnyAsync(f => f.UserName == registerInfo.Email);
      if (exists)
      {
        return BadRequest(new { message = "A user with this email already exists" });
      }

      var user = new User
      {
        UserName = registerInfo.Email,
        Email = registerInfo.Email,
        FullName = registerInfo.Email,
      };

      var hashed = this._auth.HashPassWord(user, registerInfo.Password);
      user.PasswordHash = hashed;
      _context.Users.Add(user);
      await _context.SaveChangesAsync();
      var rv = this._auth.CreateAuthData(user);
      return Ok(rv);
    }
  }
}