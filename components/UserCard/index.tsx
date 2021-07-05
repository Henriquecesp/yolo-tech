import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { User } from 'types/user'

interface UserCardProps {
  user: User
  isOwner?: boolean
}

const UserCard = ({ user, isOwner }: UserCardProps): JSX.Element => {
  return (
    <div className="p-4 max-w-2xl w-full">
      <div
        className="h-full bg-white px-8 pt-8 pb-12 rounded-lg overflow-hidden relative text-black-500"
        style={{ border: '1px solid #E6E6F0' }}
      >
        <span className="inline-flex items-center mb-8 cursor-pointer">
          {user.avatar ? (
            <img
              alt="user avatar"
              src={user.avatar}
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            />
          ) : (
            <AiOutlineUser className="w-12 h-12" />
          )}
          <span className="flex-grow flex flex-col pl-4">
            <h1 className="text-lg font-medium">{user.fullName}</h1>
            <span className="font-light">
              {user.username} | {user.title}
            </span>
          </span>
          {isOwner && (
            <span className="absolute top-4 right-6">
              <FiEdit />
            </span>
          )}
        </span>
        <h2 className="sm:text-xl text-base mt-4 mb-36 break-words">
          <div>{user.bio}</div>
        </h2>
        <div className="absolute left-0 bottom-0 w-full">
          <div className="flex items-center flex-wrap bg-gray-50 w-full left-0 px-8 py-5">
            {user.github && (
              <a
                href={user.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-yellow-600 px-16 py-6 border-2 focus:outline-none border-yellow-600 hover:bg-yellow-600 hover:text-white rounded-lg text-lg"
              >
                <FaGithub className="text-3xl mr-3" />
                Github
              </a>
            )}
            {user.linkedIn && (
              <a
                href={user.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="inline-flex ml-auto items-center text-yellow-600 px-16 py-6 border-2 focus:outline-none border-yellow-600 hover:bg-yellow-600 hover:text-white rounded-lg text-lg"
              >
                <FaLinkedin className="text-3xl mr-3" />
                Linkedin
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
