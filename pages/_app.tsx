import App from 'next/app'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from 'context/user'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'
import * as Yup from 'yup'
import { pt } from 'yup-locale-pt'

Yup.setLocale(pt)
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <UserProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </UserProvider>
      </React.Fragment>
    )
  }
}
