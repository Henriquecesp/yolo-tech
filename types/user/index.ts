import { AccRole } from 'types/enums/AccRole'

export interface User {
  fullName: string
  avatar: string
  title: string
  contato: string
  username: string
  bio: string
  github: string
  linkedIn: string
  passwd?: string
  accRole: AccRole
  regDate: string
  active: boolean
}
