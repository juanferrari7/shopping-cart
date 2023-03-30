import './Cart.css'
import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'

export function Cart () {
  const { cart, addToCart } = useCart()
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden/>

      <aside className='cart'>
        <ul>
        {cart.map(product => {
          return (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>

            <footer>
              <small>
                {product.quantity}
              </small>
              <button onClick={() => addToCart(product)}>+</button>
            </footer>
          </li>

          )
        })}
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>

  )
}
