import React from 'react'
import Link from 'next/link'
import { Course } from 'types/course'
import { HiOutlineBookOpen, HiOutlineExternalLink } from 'react-icons/hi'

interface CourseSectionProps {
  course: Course
}

const CourseSection = ({ course }: CourseSectionProps): JSX.Element => {
  return (
    <div className="p-4 max-w-2xl w-full">
      <div
        className="h-full bg-white px-8 pt-8 pb-12 rounded-lg overflow-hidden relative text-black-500"
        style={{ border: '1px solid #E6E6F0' }}
      >
        <Link href={`/users/${course.user?.username}`}>
          <div className="inline-flex items-center mb-8 cursor-pointer">
            {course.avatar ? (
              <img
                alt="user avatar"
                src={course.avatar}
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
            ) : (
              <HiOutlineBookOpen className="w-12 h-12" />
            )}
            <span className="flex-grow flex flex-col pl-4">
              <span className="text-lg font-medium">{course.name}</span>
              <span className="font-light">{course.instructor}</span>
            </span>
          </div>
        </Link>
        <h2 className="sm:text-xl text-base mt-4 mb-36 break-words">
          <div>{course.description}</div>
        </h2>
        <div className="absolute left-0 bottom-0 w-full">
          <div className="flex items-center flex-wrap bg-gray-50 w-full left-0 px-8 py-5">
            <span className="text-gray-500 mr-4">Preço - Duração</span>
            <span className="leading-none text-xl font-bold py-4">
              R$ {course.price} - {course.length} horas
            </span>
            <a
              target="_blank"
              rel="noreferrer"
              href={course.site}
              className="bg-yellow-600 ml-auto rounded py-4 px-14 text-white font-medium cursor-pointer flex items-center"
            >
              <HiOutlineExternalLink className="mr-2 text-xl" /> Acessar site
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseSection
