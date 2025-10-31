import { YukemuriClient } from '@yukemuri/api'

export const api = new YukemuriClient(import.meta.env.PUBLIC_API_URL || 'https://dummyjson.com')
