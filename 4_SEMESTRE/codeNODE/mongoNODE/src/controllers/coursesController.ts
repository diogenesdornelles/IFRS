import { Request, Response } from 'express'
import * as courseService from '../services/coursesServices'
import { ICourse } from '../models/Course'

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await courseService.getAllCourses()
    res.status(200).json(courses)
  } catch (error) {
    res.status(500).json({ error: String(error) })
  }
}

export const getCourseById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const course = await courseService.getCourseById(id)
    if (!course) {
      return res.status(404).json({ message: 'Curso não encontrado' })
    }
    res.status(200).json(course)
  } catch (error) {
    res.status(500).json({ error: String(error) })
  }
}

export const getCourses = async (req: Request, res: Response) => {
  const page = req.query.page ? parseInt(req.query.page as string, 10) : 1
  try {
    const courses = await courseService.getCourses(page)
    if (!courses) {
      return res.status(404).json({ message: 'Cursos não encontrados' })
    }
    res.status(200).json(courses)
  } catch (error) {
    res.status(500).json({ error: String(error) })
  }
}

export const createCourse = async (req: Request, res: Response) => {
  try {
    const courseData = req.body as ICourse
    const newCourse = await courseService.createCourse(courseData)
    res.status(201).json(newCourse)
  } catch (error) {
    res.status(500).json({ error: String(error) })
  }
}

export const updateCourse = async (req: Request, res: Response) => {
  const { id } = req.params
  const courseData = req.body as Partial<ICourse>
  try {
    const updatedCourse = await courseService.updateCourse(id, courseData)
    if (!updatedCourse) {
      return res.status(404).json({ message: 'Curso não encontrado' })
    }
    res.status(200).json(updatedCourse)
  } catch (error) {
    res.status(500).json({ error: String(error) })
  }
}

export const deleteCourse = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const success = await courseService.deleteCourse(id)
    if (!success) {
      return res.status(404).json({ message: 'Curso não encontrado' })
    }
    res.status(200).json({ message: 'Curso deletado com sucesso' })
  } catch (error) {
    res.status(500).json({ error: String(error) })
  }
}
