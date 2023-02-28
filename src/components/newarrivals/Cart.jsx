import React from "react"
import Ndata from "./Ndata"

const Cart = () => {
  return (
      <div className='css-1bg'>
          <div className='css-1a'>
            {Ndata.map((val, index) => {
              return (

                <div className='box p-l-t' key={index}>
                    <a href='/'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                        <h4>{val.name}</h4>
                        <span>${val.price}</span>
                    </a>

                </div>

              )
            })}
          </div>
      </div>
  )
}

export default Cart
