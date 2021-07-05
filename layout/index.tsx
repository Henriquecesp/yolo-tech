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
    <div className="min-w-screen min-h-screen" style={{ backgroundColor: "#F0F0F7" }}>
      <div className="text-gray-400 body-font overflow-hidden">
        {!noHeader && <Header title={title} description={description} />}
        <div className="container mx-auto">
          <div
            className="flex flex-wrap justify-center"
            style={{
              marginTop: !noHeader ? '-1.5rem' : ''
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
