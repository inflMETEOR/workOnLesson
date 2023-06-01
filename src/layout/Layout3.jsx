import React from 'react'
import Header from "../component/Header"
import Footer from "../component/Footer"
import css from "./Layout.module.css"
export const Layout3 = ({children}) => {
  return (
    <div className='l-body'>
        <Header/>
        <div className={css.block}>{children}</div>
        <Footer/>
    </div>
  )
}

export default Layout3