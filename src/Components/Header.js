import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Orders from './Orders';


const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return(
    <div className='card__orders'>
      {props.orders.map(el => (
          <Orders onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>Сумма {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  )
}

const showNothing = () =>{
  return(
    <div>
        <h2 className='title__empty'>Корзина пустая</h2>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCardOpen] = useState(false)

  return (
    <header>
      <div className='header__wrapper'>
        <span className='logo'>House Staff</span>
        <nav className='nav'>
          <ul className='nav__list'>
            <FaShoppingCart onClick={() => setCardOpen(cartOpen = !cartOpen)} className={`header__cart ${cartOpen && 'active'}`} />
            <li>Главная</li>
            <li>Про нас</li>
            <li>Мой Кабинет</li>
          </ul>
        </nav>
        {cartOpen && (
          <div className='shop__cart'>
            {props.orders.length > 0 ? 
              showOrders(props) : showNothing()}

          </div>
        )}

      </div>
      <div className='pesentation'></div>
    </header>
  )
}
