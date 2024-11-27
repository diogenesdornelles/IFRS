import Course, { ICourse } from '../models/Course'

export const getAllCourses = async (): Promise<ICourse[]> => {
  try {
    const courses = await Course.find()
    return courses
  } catch (error) {
    throw new Error(`Erro ao buscar cursos: ${error}`)
  }
}

export const getCourseById = async (id: string): Promise<ICourse | null> => {
  try {
    const course = await Course.findById(id)
    return course
  } catch (error) {
    throw new Error(`Erro ao buscar o curso com ID ${id}: ${error}`)
  }
}

export const getCourses = async (page: number): Promise<ICourse[] | null> => {
  try {
    // @ts-ignore
    const courses = await Course.paginate({}, { page, limit: 10 })

    return courses
  } catch (error) {
    throw new Error(`Erro ao buscar o curso com ID ${page}: ${error}`)
  }
}

export const createCourse = async (data: ICourse): Promise<ICourse> => {
  try {
    const newCourse = new Course(data)
    const savedCourse = await newCourse.save()
    return savedCourse
  } catch (error) {
    throw new Error(`Erro ao criar o curso: ${error}`)
  }
}

export const updateCourse = async (
  id: string,
  data: Partial<ICourse>,
): Promise<ICourse | null> => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    })
    return updatedCourse
  } catch (error) {
    throw new Error(`Erro ao atualizar o curso com ID ${id}: ${error}`)
  }
}

export const deleteCourse = async (id: string): Promise<boolean> => {
  try {
    const result = await Course.findByIdAndDelete(id)
    return result ? true : false
  } catch (error) {
    throw new Error(`Erro ao deletar o curso com ID ${id}: ${error}`)
  }
}
