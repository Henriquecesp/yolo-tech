import Layout from 'layout'
import Head from 'next/head'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Next CespDev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <main className="flex justify-center items-center h-screen bg-gray-900">
        <section className="text-gray-400 body-font w-full md:max-w-6xl">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Template CespDev
                <br className="hidden lg:inline-block" />
                NextJs <span className="text-purple-500">+</span> TailwindCSS
                <div className="h-1 w-50 mt-5 bg-indigo-500 rounded"></div>
              </h1>
              <p className="mb-8 leading-relaxed">
                Initial template for fast and agile development when working
                with NextJs.
              </p>
              <div className="flex justify-center">
                <a
                  className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
                  href="https://github.com/Henriquecesp"
                >
                  GitHub
                </a>
                <a
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                  href="https://www.linkedin.com/in/henriquecesp/"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://avatars.githubusercontent.com/henriquecesp"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  </>
)

export default Home
