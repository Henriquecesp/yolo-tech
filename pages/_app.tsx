import App from 'next/app'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Component {...pageProps} />
        <ToastContainer />
      </React.Fragment>
    )
  }
}
