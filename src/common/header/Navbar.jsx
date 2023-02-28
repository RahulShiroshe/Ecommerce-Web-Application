import React, { useState } from "react"
import { Link } from "react-router-dom"
import Categories from "../../components/MainPage/Categories";

const Navbar = () => {
  const [MobileCat, setMobileCat] = useState(false)

  return (
      <header className='header'>
        <div className='container-h d_flex'>
          <div className="catgrories d_flex" onClick={() => setMobileCat(!MobileCat)}>
             <span className='fa-solid fa-border-all'/>
            <h4>  Categories </h4>
            {MobileCat ?  <i className='fa fa-chevron-down'/> :   <i className='fa fa-chevron-down rotate'/>}
            {MobileCat ? <div className='open-cat'><Categories/></div> :  <div className="close-cat"><Categories/></div>}
          </div>
         <div className='navlink'>
            <ul className="link f_flex capitalize cartsy-menu-drawer" >
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/pages'>pages</Link>
              </li>
              <li>
                <Link to='/user'>user account</Link>
              </li>
              <li>
                <Link to='/vendor'>vendor account</Link>
              </li>
              <li>
                <Link to='/track'>track my order</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
  )
}

export default Navbar
