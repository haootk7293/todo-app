import api from '../../services/api'
import endpoints from '../../services/endpoints'

interface ICreateUserData {
  email: string
  password: string
  name?: string
  profile_image?: string
}

export const createUser = async (data: FormData) => {
  const response = await api.post(endpoints.user.create, data)
  return response.data
}
