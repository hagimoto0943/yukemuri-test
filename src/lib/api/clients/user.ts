import { api } from '@yukemuri/api'
import type { User } from '../types/user'

const users = api.get<User[]>('/users')

console.log(users)