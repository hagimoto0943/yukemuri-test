import { AuthManager } from '@yukemuri/auth'

type AuthMethod = 'jwt' | 'cookie'

export const useAuthSession = (
  method: AuthMethod, 
  username: string,
  password: string
) => {
  AuthManager.use(method)

  AuthManager.login(`https://dummyjson.com/auth/login`, {
    username: username, 
    password: password
  })
}
