import React from 'react'
import CourseCard from 'components/CourseCard'
import Layout from 'layout'
import { fetcher } from 'lib/axios'
import useSWR from 'swr'
import { CoursesResponse } from 'types/course'
import Head from 'next/head'

interface CursosProps {
  data: CoursesResponse
}

const Cursos = (props: CursosProps): JSX.Element => {
  const { data, error } = useSWR<CoursesResponse>('/courses', fetcher, {
    initialData: props.data,
  })

  if (error) <h1>Error</h1>
  if (!data.content) <h1>Loading</h1>
  if (data.content.length === 0) <h1>Nenhum curso encontrado</h1>

  return (
    <>
      <Head>
        <title>Yolo Tech - Cursos</title>
      </Head>
      <Layout title="Cursos disponíveis.">
        <div className="flex flex-col w-full items-center">
          {data.content.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const data: CoursesResponse = await fetcher('/courses')
  return {
    props: { data },
    revalidate: 1,
  }
}

export default Cursos
