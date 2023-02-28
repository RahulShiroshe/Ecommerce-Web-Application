import React, {useState} from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"
import Categories from "../../components/MainPage/Categories";

const Search = ({ CartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  const [MobileCat, setMobileCat] = useState(false)
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
      <section className='search background'>
        <div className='container-h c_flex'>
          <div className='logo width'>
            <a href='/'> <img src={logo} alt='' /></a>
            <div className="catgrories d_flex" onClick={() => setMobileCat(!MobileCat)}>
              <span className='fa-solid fa-border-all'/>
              {MobileCat ?  <i className='fa fa-chevron-down'/> :   <i className='fa fa-chevron-down rotate'/>}
              {MobileCat ? <div className='open-cat'><Categories/></div> :  <div className="close-cat"><Categories/></div>}
            </div>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>
          <div className='icon f_flex width'>
            <div className='user'>
              <Link to='/'>
               <i className='fa fa-user icon-circle'/>
              </Link>
            </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'/>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
            <div className='navlink '>
               <ul className={MobileMenu ? "cartsy-menu-drawer open" : "link f_flex capitalize cartsy-menu-drawer"} onClick={() => setMobileMenu(false)}>
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
              <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                {MobileMenu ? <i className='fas fa-times close home-btn'/> : <i className='fas fa-bars open'/>}
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Search
