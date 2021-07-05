import Layout from 'layout'
import Head from 'next/head'
import Link from 'next/link'
import Hero from 'components/assets/hero.svg'
import { AccessButton } from 'components/AccessButton'
import { HiOutlineBookOpen } from 'react-icons/hi'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Yolo Tech</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout noHeader>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto h-screen flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-9xl mb-4 font-bold text-gray-900">
              Yolo
            </h1>
            <p className="mb-8 leading-relaxed text-yellow-600 text-3xl">
              Sua plataforma de <br /> cursos online.
            </p>
            <div className="flex justify-center mt-24">
              <div>
                <Link href="cursos">
                  <button className="inline-flex items-center text-white px-16 py-6 bg-yellow-500 border-0 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg font-bold">
                    <HiOutlineBookOpen className="text-3xl mr-3" />
                    Cursos
                  </button>
                </Link>
                <span></span>
              </div>
              <div className="ml-4">
                <AccessButton />
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src={Hero} />
            <div>
              <p className="text-right m-8 leading-relaxed text-yellow-600">
                Total de 285 cursos já cadastrados ❤
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </>
)

export default Home
