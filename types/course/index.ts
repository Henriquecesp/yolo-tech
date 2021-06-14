import { CourseStatus } from 'types/enums/CourseStatus'
import { User } from 'types/user'

export interface Course {
  _id: string
  name: string
  description: string
  instructor: string
  user: User
  site: string
  price: number
  length: number
  slug: string
  regDate: string
  courseStatus: CourseStatus
  edited: boolean
  active: boolean
}
