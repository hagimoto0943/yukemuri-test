import { api } from '../base'
import type { User } from '../types/user'

export const getMe = async (): Promise<User> => {
  const response = await api.get<User>('/auth/me', undefined, true)
  return response
}