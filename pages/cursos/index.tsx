import { CourseCard } from 'components/CourseCard'
import { Header } from 'components/Header'
import Layout from 'layout'
import getAllCourses from 'lib/getAllCourses'
import React from 'react'
import { Course } from 'types/course'

interface CoursesIndexProps {
  courses: Course[]
}

const Cursos = ({ courses }: CoursesIndexProps): JSX.Element => {
  return (
    <Layout>
      <Header />
      {courses.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const courses = await getAllCourses()
  return {
    props: { courses },
    revalidate: 1,
  }
}

export default Cursos
