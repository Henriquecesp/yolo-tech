import Layout from 'layout'
import CourseSection from 'components/CourseSection'
import { Course as CourseType, CoursesResponse } from 'types/course'
import Head from 'next/head'
import { fetcher } from 'lib/axios'

interface CourseProps {
  course: CourseType
}

const Course = ({ course }: CourseProps) => {
  return (
    <>
      <Head>
        <title>Yolo Tech - {course?.name}</title>
      </Head>
      <Layout title={course?.name}>
        {course && <CourseSection course={course} />}
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const data: CoursesResponse = await fetcher('/courses')
  const newPaths = []
  // Add params to every slug obj returned from api
  for (const slug of data.content) {
    newPaths.push({ params: { ...slug } })
  }
  // Return paths to render components
  return {
    paths: newPaths,
    fallback: true,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const data: CourseType = await fetcher(`/courses/search/${slug}`)

  return {
    props: { course: data },
    revalidate: 1,
  }
}

export default Course
