import React from 'react'
import Link from 'next/link'
import { IoEnterOutline } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'
import { useAuthContext } from 'context/user'

export const AccessButton = (): JSX.Element => {
  const { logged } = useAuthContext()

  if (logged) {
    return (
      <Link href="perfil">
        <button className="inline-flex items-center text-white px-16 py-6 bg-yellow-500 border-0 focus:outline-none hover:bg-yellow-600 opacity-40 hover:opacity-100 rounded-lg text-lg">
          <AiOutlineUser className="text-3xl mr-3" />
          Perfil
        </button>
      </Link>
    )
  } else {
    return (
      <div className="flex flex-col">
        <Link href="cadastrar">
          <button className="inline-flex items-center text-white px-16 py-6 bg-yellow-500 border-0 focus:outline-none hover:bg-yellow-600 opacity-40 hover:opacity-100 rounded-lg text-lg">
            <IoEnterOutline className="text-3xl mr-3" />
            Cadastrar
          </button>
        </Link>
        <Link href="entrar">
          <span className="sm:text-base text-lg text-yellow-500 underline cursor-pointer">
            Ja possui uma conta ? Acesse
          </span>
        </Link>
      </div>
    )
  }
}
