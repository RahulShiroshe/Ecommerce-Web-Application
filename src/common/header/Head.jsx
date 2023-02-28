import React from "react"
import logo from "../../components/assets/images/logo.svg";

const Head = () => {
  return (
      <section className='head css-900'>
        <div className='container-h'>
          <div className='left '>
            <div className='logo'>
              <a href='/'>
                <img src={logo} alt='' />
              </a>
            </div>
            <i className='fa fa-phone'/>
            <label className='s-900'> +91 79722 05933</label>
            <i className='fa fa-envelope'/>
            <label className='s-900'> support@ui-lib.com</label>
          </div>
          <div className='right RText'>
            <label className='s-900'>Theme FAQ"s</label>
            <label className='s-900'>Need Helps</label>
            <i className="fa fa-flag" aria-hidden="true" style={{fontSize: "0.75rem"}}/>
            <label>EN</label>
              <i className="fa fa-flag" aria-hidden="true" style={{fontSize: "0.75rem"}}/>
            <label>USD</label>
          </div>
        </div>
      </section>
  )
}

export default Head
