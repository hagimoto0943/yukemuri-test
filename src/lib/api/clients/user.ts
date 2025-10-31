import type { User } from '../types/user'
import { api } from '../base'

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>('/users')
  return response
}

export const getUser = async (id: number): Promise<User> => {
  const response = await api.get<User>(`/users/${id}`)
  return response
}

export const createUser = async (body: User): Promise<User> => {
  const response = await api.post<User>('/users/add', body)
  return response
}

export const updateUser = async (id: number, body: User): Promise<User> => {
  const response = await api.put<User>(`/users/${id}`, body)
  return response
}

export const limitAndSkipUsers = async (params: { limit: number; skip: number }): Promise<User[]> => {
  const response = await api.get<User[]>('/users', undefined, false, params);
  return response
}


// import { getUsers, getUser } from './lib/api/clients/user'

  // const fetchUsers = async () => {
  //   const users = await getUsers()
  //   console.log(users)
  // }

  // const fetchUser = async (id: number) => {
  //   const user = await getUser(id)
  //   console.log(user)
  // }
  // fetchUsers()
  // fetchUser(1)

  // import { createUser } from './lib/api/clients/user'

  //   const handleCreateUser = async () => {
  //   const newUser: User = {
  //     id: 9999,
  //     firstName: 'Aiko',
  //     lastName: 'Tanaka',
  //     maidenName: 'Sato',
  //     age: 28,
  //     gender: 'female',
  //     email: 'aiko.tanaka@example.com',
  //     phone: '+81 80 1234 5678',
  //     username: 'aiko.t',
  //     password: 'SecurePass!123',
  //     birthDate: '1996-04-12',
  //     image: 'https://example.com/avatar/aiko.png',
  //     bloodGroup: 'O+',
  //     height: 165,
  //     weight: 58,
  //     eyeColor: 'brown',
  //     hair: {
  //       color: 'black',
  //       type: 'straight',
  //     },
  //     ip: '192.168.1.42',
  //     address: {
  //       address: '1-2-3 Shibuya',
  //       city: 'Tokyo',
  //       state: 'Tokyo',
  //       stateCode: '13',
  //       postalCode: '150-0002',
  //       coordinates: {
  //         lat: 35.6595,
  //         lng: 139.7005,
  //       },
  //       country: 'Japan',
  //     },
  //     macAddress: '00:1A:2B:3C:4D:5E',
  //     university: 'The University of Tokyo',
  //     bank: {
  //       cardExpire: '08/28',
  //       cardNumber: '5241123456789012',
  //       cardType: 'Mastercard',
  //       currency: 'JPY',
  //       iban: 'JP00 0000 0000 0000 0000 0000',
  //     },
  //     company: {
  //       department: 'Engineering',
  //       name: 'Yukemuri Labs',
  //       title: 'Frontend Developer',
  //       address: {
  //         address: '2-4-12 Roppongi',
  //         city: 'Tokyo',
  //         state: 'Tokyo',
  //         stateCode: '13',
  //         postalCode: '106-0032',
  //         coordinates: {
  //           lat: 35.6628,
  //           lng: 139.731,
  //         },
  //         country: 'Japan',
  //       },
  //     },
  //     ein: '12-3456789',
  //     ssn: '123-45-6789',
  //     userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5_0)',
  //     crypto: {
  //       coin: 'ETH',
  //       wallet: '0xAbC1234567890DefABC1234567890defABC12345',
  //       network: 'Ethereum',
  //     },
  //     role: 'admin',
  //   }
  //   const createdUser = await createUser(newUser)
  //   console.log(createdUser)
  // }

  // handleCreateUser()