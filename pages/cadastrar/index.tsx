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
  email: string
  fullName: string
  avatar: string
  bio: string
  username: string
  password: string
  passwordConfirm: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  fullName: yup.string().required(),
  avatar: yup.string().required(),
  bio: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  passwordConfirm: yup.string().required(),
})

const CreateAccount = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })
  const router = useRouter()

  useEffect(() => {
    if (errors) {
      Object.keys(errors).map((error) => toast.error(errors[error]?.message))
    }
  }, [errors])

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    poster('/auth/signup', data).then((data) => {
      toast.success(data)
      router.push('/entrar')
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
                Seus dados
              </h1>
              <hr className="my-4" />
              <Input
                name="fullName"
                label="Nome completo"
                register={register}
                required
              />
              <Input name="email" label="Email" register={register} required />
              <Input
                name="title"
                label="Profissão / Cargo"
                register={register}
                required
              />
              <Input name="avatar" label="Link da foto" register={register} />
              <Input
                name="bio"
                cols={5}
                label="Biografia"
                register={register}
              />
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
                label="Senha"
                type="password"
                register={register}
                required
              />
              <Input
                name="passwordConfirm"
                label="Repetir senha"
                type="password"
                register={register}
              />
            </div>
            <div className="absolute left-0 bottom-0 w-full">
              <div className="flex justify-end flex-wrap bg-gray-50 w-full left-0 px-8 py-5">
                <button
                  type="submit"
                  className="inline-flex items-center border-0 focus:outline-none hover:bg-yellow-600 opacity-40 hover:opacity-100 text-lg bg-yellow-600 ml-auto rounded py-4 px-14 text-white font-medium cursor-pointer"
                >
                  Salvar cadastro
                </button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  )
}

export default CreateAccount
