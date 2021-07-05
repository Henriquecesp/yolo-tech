import React, { useEffect } from 'react'
import Layout from 'layout'
import Input from 'components/input'
import Head from 'next/head'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { poster } from 'lib/axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuthContext } from 'context/user'

const description = (): JSX.Element => (
  <span>
    Preencha o formulário de inscrição.
    <br />
    <Link href="entrar">
      <span className="underline cursor-pointer">Ja possui conta ? Acesse</span>
    </Link>
  </span>
)

interface FormValues {
  username: string
  password: string
}

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
})

const AccessAccount = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })
  const { logged } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (logged) {
      router.push('/perfil')
    }
  }, [logged])

  useEffect(() => {
    if (errors) {
      Object.keys(errors).map((error) => toast.error(errors[error]?.message))
    }
  }, [errors])

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    poster('/auth/signin', data).then((data) => {
      localStorage.setItem('auth', data.token)
      toast.success('Sucesso')
      router.push('/cursos')
    }).catch((e) => {
      toast.error(e.response.data.message)
    })
  }

  return (
    <>
      <Head>
        <title>Yolo Tech - Cadastro</title>
      </Head>
      <Layout title="Cadastro" description={description()}>
        <div className="flex flex-col bg-white p-10 rounded z-10 max-w-2xl w-full shadow-sm relative mb-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-16">
              <h1 className="sm:text-2xl text-xl font-medium text-black-500">
                Dados de acesso
              </h1>
              <hr className="my-4" />
              <Input
                name="username"
                label="Usuário"
                register={register}
                required
              />
              <Input
                name="password"
                type="password"
                label="Senha"
                register={register}
                required
              />
            </div>
            <div className="absolute left-0 bottom-0 w-full">
              <div className="flex justify-end flex-wrap bg-gray-50 w-full left-0 px-8 py-5">
                <button
                  type="submit"
                  className="inline-flex items-center border-0 focus:outline-none hover:bg-yellow-600 opacity-40 hover:opacity-100 text-lg bg-yellow-600 ml-auto rounded py-4 px-14 text-white font-medium cursor-pointer"
                >
                  Entrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  )
}

export default AccessAccount
