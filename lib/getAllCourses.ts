import * as faker from 'faker/locale/pt_BR'
import { AccRole } from 'types/enums/AccRole'
import { CourseStatus } from 'types/enums/CourseStatus'

const createCourse = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.lorem.sentence(3),
    description: faker.lorem.sentence(20),
    instructor: faker.name.findName(),
    user: {
      fullName: faker.company.companyName(),
      avatar: faker.internet.avatar(),
      title: faker.lorem.sentence(3),
      contato: faker.phone.phoneNumber(),
      username: faker.internet.userName(),
      bio: faker.lorem.sentence(),
      github: faker.internet.userName(),
      linkedIn: faker.internet.url(),
      accRole: faker.random.arrayElement(Object.getOwnPropertyNames(AccRole)),
      regDate: faker.time.recent(),
      active: faker.datatype.boolean(),
    },
    site: faker.internet.url(),
    price: faker.datatype.float({ min: 100, max: 999 }),
    length: faker.datatype.number(8),
    slug: faker.helpers.slugify(faker.name.findName()),
    regDate: faker.time.recent(),
    courseStatus: faker.random.arrayElement(
      Object.getOwnPropertyNames(CourseStatus)
    ),
    edited: faker.datatype.boolean(),
    active: faker.datatype.boolean(),
  }
}

const createCourses = (numCouse = 5) => {
  return Array.from({ length: numCouse }, createCourse)
}

const getAllCourses = () => {
  const courses = createCourses(5)
  return courses
}

export default getAllCourses
