import React from "react"
import Dcard from "./Dcard"

const Discount = () => {
  return (
      <section className='Discount NewArrivals m-b'>
        <div className='container'>
          <div className='heading d_flex m-b-24'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt = "" />
              <h2>Big Discounts</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
  )
}

export default Discount
