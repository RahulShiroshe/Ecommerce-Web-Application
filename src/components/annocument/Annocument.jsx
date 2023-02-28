import React from "react"

const Annocument = () => {
  return (
    <>
      <section className='annocument'>
        <div className='container d_flex'>
          <div className='img css-ann'>
             <img src='../images/banner-1.png' style={{width: "100%", height: "100%"}} alt = "banner 1"/>
          </div>
          <div className='img css-annr' >
            <img src='../images/banner-2.png' style={{width: "100%", height: "100%"}} alt = "banner 2"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
