using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using travelingo.models;
using travelingo.viewmodels;

namespace travelingo.services
{
  public class AuthService : IAuthService
  {
    private double jwtLifespan = 259200;
    private string jwtSecret = "supercalafragalisticexpialadociousandsons";

    public AuthData CreateAuthData(User user)
    {
      var expirationTime = DateTime.UtcNow.AddSeconds(jwtLifespan);
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new[]
        {
          new Claim(ClaimTypes.Name, user.UserName),
          new Claim("id", user.Id.ToString())
        }),
        Expires = expirationTime,
        SigningCredentials = new SigningCredentials(
          new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret)),
          SecurityAlgorithms.HmacSha256Signature
        )
      };
      var tokenHandler = new JwtSecurityTokenHandler();
      var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));

      return new AuthData
      {
        Token = token,
        TokenExpirationTime = ((DateTimeOffset)expirationTime).ToUnixTimeSeconds(),
        Id = user.Id,
        User = user
      };
    }

    public string HashPassWord(User user, string passwordToHash)
    {
      return new PasswordHasher<User>().HashPassword(user, passwordToHash);
    }

    public bool VerifyPassword(User user, string providedPassword)
    {
      return new PasswordHasher<User>().VerifyHashedPassword(user, user.PasswordHash, providedPassword) == PasswordVerificationResult.Success;
    }
  }
}