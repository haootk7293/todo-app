import { AxiosRequestConfig } from 'axios'
import api from '../../services/api'
import endpoints from '../../services/endpoints'

interface PutTodoArgs {
  idTodo: string
  name: string
  description?: string | null
}

export const putTodo = async ({ idTodo, name, description }: PutTodoArgs) => {
  const response = await api.patch(`${endpoints.todo.patch}`, {
    id: idTodo,
    title: name,
    description: description || null
  })
  return response.data
}

interface PutTodoCompleteArgs {
  idTodo: string
  completed: boolean
}

export const putCompletedTodo = async ({
  idTodo,
  completed
}: PutTodoCompleteArgs) => {
  const response = await api.patch(`${endpoints.todo.patchCheck}/${idTodo}`, {
    complete: completed ? 1 : 0
  })
  return response.data
}
