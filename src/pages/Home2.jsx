import React from 'react'
import Layout from '../layout/Layout3'
import logo from '../Image/logo-gt.svg'
import css from "../CSS/Home2.module.css"
import carOne from '../Image/carOne.jpg'
import carTwo from '../Image/carTwo.jpg'

const Home2 = () => {
  return (
    <>
    <Layout>
        <div className={css.container}>
        <img src={logo} alt="" className={css.logo} />
        <br />
        <div className={css.homeButtons}>
          <button className={css.one}>GT7</button>
          <button className={css.one}>GT SPORT</button>
          <button className={css.one}>GT LIVE</button>
          <button className={css.one}>Новини</button>
          <button className={css.one}>Продукти</button>
        </div>
        <br />
        <div className={css.BlockOne}>
           <img src={carOne} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
        </div>
        <div className={css.BlockTwo}>
           <img src={carTwo} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur. </p>
        </div>
        </div>
    </Layout>
    </>
  )
}

export default Home2