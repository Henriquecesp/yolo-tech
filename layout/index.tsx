import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-w-screen min-h-screen bg-blue-50">
      <div className="text-gray-400 body-font overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
