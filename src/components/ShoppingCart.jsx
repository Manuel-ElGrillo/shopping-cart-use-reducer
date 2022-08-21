import React, { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import Product from './Product'
import ChosenProduct from './ChosenProduct'
import { TYPES } from '../actions/shoppingActions'

const ShoppingCart = () => {

    const [ shoppingState, shoppingDispatch ] = useReducer( shoppingReducer, shoppingInitialState )

    const addToCart = (id) => {
        shoppingDispatch( { type: TYPES.ADD_TO_CART, payload: id } )
    }

    const removeFromCart = (id, allChosenProducts = false) => {
        if(allChosenProducts) {
            shoppingDispatch( { type: TYPES.REMOVE_ALL_FROM_CART, payload: id } )
        } else {
            shoppingDispatch( { type: TYPES.REMOVE_ONE_FROM_CART, payload: id } )
        }
    }

    const clearCart = () => {
        shoppingDispatch( {type: TYPES.CLEAR_CART} )
    }


  return (
    <>
    
        <h2 className='text-center
                       text-2xl
                       py-3'>
            Productos
        </h2>

        <section className='container
                            mx-auto
                            p-3
                            grid
                            grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                            gap-8'>
            {
                shoppingState.products.map( product => (
                    <Product key={product.id}
                             data_from_shopping_reducer={product}
                             addToCart={addToCart}/>
                ))
            }
        </section>

        <section>

            <h3 className='text-center
                           text-2xl
                           py-3'>
                Carrito
            </h3>

            <button onClick={clearCart}
                        className="bg-red-400
                                   px-4
                                   py-2
                                   my-3
                                   block
                                   mx-auto
                                   rounded
                                   hover:bg-red-500">
                    Limpiar Carrito
            </button>

            <div className='container
                            mx-auto
                            p-3
                            grid
                            grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                            gap-8'>

                {
                    shoppingState.cart.map( (product, index) => ( //Tengo mis dudas sobre si pasar el índice pero funciona xD
                        <ChosenProduct key={index}
                                       data_from_shopping_reducer={product}
                                       removeFromCart={removeFromCart}/>
                    ) )
                }

            </div>

        </section>
    
    </>
  )
}

export default ShoppingCart