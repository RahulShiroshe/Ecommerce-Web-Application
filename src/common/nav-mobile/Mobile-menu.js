import React from "react"
import {Link} from "react-router-dom";

const Mobilemenu = ({ CartItem }) => {
      return (
            <div className='mobile-footer'>
                <Link to='/' className="css-fm">
                    <i className="fa fa-home css-j" aria-hidden="true"/>
                    Home
                </Link>
                <a href="/cat" className="css-fm">
                    <span className='fa-solid fa-border-all css-j'/>
                    Category
                </a>
                <Link to='/cart' className="css-fm">
                    <i className='fa fa-shopping-bag css-j'>
                      <span className="number">{CartItem.length === 0 ? "0" : CartItem.length}</span>
                    </i>
                    Cart
                </Link>
                <a href="/profile" className="css-fm">
                    <i className='fa fa-user css-j' aria-hidden="true"/>
                    Account
                </a>
            </div>
    )
}

export default Mobilemenu
