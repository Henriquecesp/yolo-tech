import { User } from 'types/user'

export interface Course {
  id: string
  name: string
  description: string
  instructor: string
  categoryList: []
  site: string
  price: number
  length: number
  slug: string
  regDate: Date
  edited: boolean
  active: boolean
  avatar?: string
}

export type CoursesResponse = {
  content: Course[]
  pageable: {
    sort: { sorted: boolean; unsorted: boolean; empty: boolean }
    pageNumber: number
    pageSize: number
    offset: number
    paged: boolean
    unpaged: boolean
  }
}
