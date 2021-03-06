import api from '../../services/api'
import endpoints from '../../services/endpoints'

export const deleteCollection = async (idCollection: string) => {
  const response = await api.delete(endpoints.collections.delete, {
    data: { id: idCollection }
  })

  return response.data
}

export default deleteCollection
