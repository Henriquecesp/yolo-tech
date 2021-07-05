import React from 'react'
import { Header } from 'components/Header'

interface LayoutProps {
  children: JSX.Element
  noHeader?: boolean
  title?: JSX.Element | string
  description?: JSX.Element | string
}

const Layout = ({ children, noHeader, title, description }: LayoutProps): JSX.Element => {
  return (
    <div className="min-w-screen min-h-screen bg-blue-50">
      <div className="text-gray-400 body-font overflow-hidden">
        {!noHeader && <Header title={title} description={description} />}
        <div className="container mx-auto">
          <div
            className={`flex flex-wrap justify-center ${!noHeader && '-mt-6'}`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
