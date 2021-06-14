import React from 'react'
import Link from 'next/link'
import { Course } from 'types/course'

interface CourseCardProps {
  course: Course
  isCourse?: boolean
}

export const CourseCard = ({
  course,
  isCourse = false,
}: CourseCardProps): JSX.Element => {
  return (
    <div className="p-4 max-w-2xl w-full">
      <div
        className="h-full bg-white px-8 pt-8 pb-12 rounded-lg overflow-hidden relative text-black-500"
        style={{ border: '1px solid #E6E6F0' }}
      >
        <a
          className="inline-flex items-center mb-8 cursor-pointer"
          target="_blank"
          href=""
          rel="noreferrer"
        >
          <img
            alt="user avatar"
            src={course.user.avatar}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="text-lg font-medium">{course.name}</span>
            <span className="font-light">{course.user.fullName}</span>
          </span>
        </a>
        <h2 className="sm:text-xl text-base mt-4 mb-36 break-words">
          <div>{course.description}</div>
        </h2>
        <div className="absolute left-0 bottom-0 w-full">
          <div className="flex items-center flex-wrap bg-gray-50 w-full left-0 px-4 py-10">
            <span className="text-gray-500 mr-4">Preço - Duração</span>
            <span className="leading-none text-xl font-bold">
              R$ {course.price} - {course.length} horas
            </span>
            {!isCourse && (
              <Link href={`cursos/${course.slug}`}>
                <div className="bg-yellow-600 ml-auto rounded py-4 px-10 text-white font-bold cursor-pointer">
                  Acessar curso
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
