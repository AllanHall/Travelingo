using travelingo.models;

namespace travelingo.viewmodels
{
  public class AuthData
  {
    public string Token { get; set; }
    public long TokenExpirationTime { get; set; }
    public int Id { get; set; }
    public User User { get; set; }
  }
}