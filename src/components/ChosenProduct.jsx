import React from 'react'

const ChosenProduct = ({data_from_shopping_reducer, removeFromCart}) => {
  return (
    <div className='border
                    border-solid
                    border-slate-600
                    p-2
                    rounded
                    shadow-lg'>

      <img src={data_from_shopping_reducer.src} 
           alt={data_from_shopping_reducer.alt} 
           className="w-full
                      h-56"/>

        <h4 className='text-center
                       font-bold
                       text-lg
                       py-3'>
          {data_from_shopping_reducer.name}
        </h4>

        <span className='text-center
                         block
                         text-lg'>
          ${data_from_shopping_reducer.price}.00
        </span>

        <p className='font-bold
                      text-md
                      py-1'>
          Cantidad: {data_from_shopping_reducer.quantity}
        </p>

        <p className='font-bold
                      text-md
                      py-1'>
          Precio: ${data_from_shopping_reducer.quantity * data_from_shopping_reducer.price}
        </p>

        <button onClick={() => removeFromCart(data_from_shopping_reducer.id)}
                className="bg-red-400
                           p-1
                           mx-1
                           rounded">
          Eliminar 1 Producto
        </button>

        <button onClick={() => removeFromCart(data_from_shopping_reducer.id, true)}
                className="bg-purple-400
                           p-1
                           mx-1
                           rounded">
          Eliminar todos
        </button>

    </div>
  )
}

export default ChosenProduct