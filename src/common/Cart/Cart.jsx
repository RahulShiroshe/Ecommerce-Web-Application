import React from "react"
import "./style.css"

const Cart = ({ CartItem, addToCart, decreaseQty, removeQty }) => {
    const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
    return (
        <section className='cart-items'>
            <div className='container d_flex'>
                <div className='cart-details'>
                    {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}
                    {CartItem.map((item) => {
                        const productQty = item.price * item.qty
                        return (
                            <div className='css-1' key={item.id}>
                                    <img src={item.cover} alt='' className='css-img' />
                                    <button className='removeCart css-remove' onClick={() => removeQty(item)}>
                                        <i className='fa-solid fa-xmark'></i>
                                    </button>
                                <div className='css-info'>
                                    <a href='/'>
                                        <span className='css-h-a'>{item.name}</span>
                                    </a>
                                    <div className='css-info-price'>
                                       <span className='css-qty'> ${item.price}.00 x {item.qty}</span>
                                        <span className='css-price'>${productQty}.00</span>
                                    </div>
                                    <div className='css-total'>
                                        <button className='desCart' onClick={() => decreaseQty(item)}>
                                            <i className='fa-solid fa-minus'></i>
                                        </button>
                                        <span className='css-item-qty'>{item.qty}</span>
                                        <button className='incCart' onClick={() => addToCart(item)}>
                                            <i className='fa-solid fa-plus'></i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
                <div className='cart-total'>
                   <div className='css-back'>
                        <span className='css-h2'>Cart Summary</span>
                       <hr className='css-hr'/>
                        <div className='total-price'>
                            <span className='css-h-total' >Total Price :</span>
                            <span className='css-h-total-price'>${totalPrice}.00</span>
                        </div>
                  </div>
                </div>
            </div>
        </section>
    )
}

export default Cart