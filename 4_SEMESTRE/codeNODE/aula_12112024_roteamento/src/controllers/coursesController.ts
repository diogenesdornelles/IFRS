import { Request, Response, NextFunction } from 'express'
import * as coursesServices from '../services/coursesServices'

export const getAllCourses = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const courses = await coursesServices.getAllCourses()
    res.json(courses)
  } catch (error) {
    next(error)
  }
}

export const getCourseById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const course = await coursesServices.getCourseById(req.params.id)
    if (!course) {
      return res.status(404).json({ message: 'Curso não encontrado' })
    }
    res.json(course)
  } catch (error) {
    next(error)
  }
}

export const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const course = await coursesServices.createCourse(req as any)
    if (!course) {
      return res.status(404).json({ message: 'Curso não pôde ser criado' })
    }
    res.json(course)
  } catch (error) {
    next(error)
  }
}

export const updateCourse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params
  try {
    const course = await coursesServices.updateCourse(id, req as any)
    if (!course) {
      return res.status(404).json({ message: 'Course não atualizado' })
    }
    res.json(course)
  } catch (error) {
    next(error)
  }
}

export const deleteCourse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params
  try {
    const response = await coursesServices.deleteCourse(id)
    if (!response) {
      return res.status(404).json({ message: 'Curso não deletado' })
    }
    res.json('curso deletado com sucesso')
  } catch (error) {
    next(error)
  }
}
