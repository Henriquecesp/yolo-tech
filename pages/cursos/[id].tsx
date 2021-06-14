import getAllCourses from 'lib/getAllCourses'
import Layout from 'layout'
import { CourseCard } from 'components/CourseCard'
import { Course as CourseType } from 'types/course'

// const Course = ({ course }) => {
const Course = () => {
  const course = getAllCourses()[0]
  return (
    <div>
      <Layout>
        <CourseCard course={(course as unknown) as CourseType} isCourse />
      </Layout>
    </div>
  )
}

// export async function getStaticPaths() {
//   const courses = await getAllCourses()
//   return {
//     paths: courses.map(row => row.slug),
//     fallback: true
//   }
// }

// export async function getStaticProps({ params: { slug } }) {
//   const courses = await getAllCourses()
//   const course = courses.find(t => t.slug === slug) || courses[0]

//   return {
//     props: { course },
//     revalidate: 1
//   }
// }

export default Course
