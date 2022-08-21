import React from 'react'

const Product = ({data_from_shopping_reducer, addToCart}) => { // Nombre de variable super descriptivo, lol xD
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

        <button onClick={() => addToCart(data_from_shopping_reducer.id)}
                className="bg-green-400
                           px-4
                           py-2
                           my-3
                           block
                           mx-auto
                           rounded
                           hover:bg-green-500">
          Agregar
        </button>

    </div>
  )
}

export default Product