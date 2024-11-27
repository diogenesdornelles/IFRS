import TCourse from '../types/course'
import courses from '../db/fake'
const { v4: uuidv4 } = require('uuid')

export const getAllCourses = async (): Promise<TCourse[]> => {
  return courses
}

export const getCourseById = async (
  id: string,
): Promise<TCourse | undefined> => {
  return courses.find(course => course.id === id)
}

export const createCourse = async (
  req: Request,
): Promise<TCourse | undefined> => {
  // Usa Desestruturação para pegar os campos enviados pelo body
  const { name, type } = req.body as unknown as TCourse
  // Adiciona um novo UUID
  const newCourse = { id: uuidv4(), name, type }
  // Acrescenta este novo curso no final do array
  courses.push(newCourse)
  // Retorna o novo curso criado
  return newCourse
}

export const updateCourse = async (
  id: string,
  req: Request,
): Promise<TCourse | undefined | null> => {
  // Pega os dados vindos via body da requisição
  const body = req.body

  // Verifica se este id existe no array de courses e retorna seu índice
  const courseIndex = courses.findIndex(course => course.id === id)
  if (courseIndex < 0) {
    return null
  }
  // Cria um registro com os dados atualizados
  const updatedCourse = { id, ...body } as unknown as TCourse
  // Sobrescreve o registro no array
  courses[courseIndex] = updatedCourse
  // Retorna o registro atualizado
  return updatedCourse
}

export const deleteCourse = async (id: string): Promise<boolean | null> => {
  // Verifica se este id existe no array de courses e retorna seu índice
  const courseIndex = courses.findIndex(course => course.id === id)
  if (courseIndex < 0) {
    return null
  }
  // Remove o curso do array
  courses.splice(courseIndex, 1)
  return true
}
