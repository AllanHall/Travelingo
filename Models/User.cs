using System;
using System.Collections.Generic;

namespace travelingo.models
{
  public class User
  {
    public int Id { get; set; }
    public string FullName { get; set; }
    public string UserName { get; set; }
    public string PasswordHash { get; set; }
    public string Email { get; set; }
    public DateTime DateJoined { get; set; } = DateTime.Now;
    public List<Site> Sites { get; set; } = new List<Site>();
  }
}