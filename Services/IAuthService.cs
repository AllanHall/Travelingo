using travelingo.viewmodels;
using travelingo.models;

namespace travelingo.services
{
  public interface IAuthService
  {
    AuthData CreateAuthData(User user);
    string HashPassWord(User elephant, string passwordToHash);
    bool VerifyPassword(User user, string providedPassword);
  }
}