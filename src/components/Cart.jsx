import './Cart.css'
import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small onClick={addToCart}>
          {quantity}
        </small>
        <button onClick={() => addToCart()}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const { state, addToCart, clearCart } = useCart()
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden/>

      <aside className='cart'>
        <ul>
        {state.map(product => (
          <CartItem
            key={product.id}
            addToCart={() => addToCart(product)}
            {...product}
          />

        )
        )}
        </ul>

        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>

  )
}
