import { TYPES } from "../actions/shoppingActions";
import bugImg from "../img/bug.png"
import cafeImg from "../img/cafe.webp"
import checkImg from "../img/check.png"
import semillasImg from "../img/semillas.webp"
import guanteleteImg from "../img/guantelete.webp"
import cajaImg from "../img/caja-misteriosa.webp"

export const shoppingInitialState = { //Productos simulados ya que no hay un backend ni una API a cual consultar
    products: [
        {id: 1, name: "Bug", price: 0, src: bugImg, alt: "Bug"},
        {id: 2, name: "Café", price: 10, src: cafeImg, alt: "Cafe"},
        {id: 3, name: "Código compilado a la primera", price: 99999999, src: checkImg, alt: "Check list"},
        {id: 4, name: "Semillas del Ermitaño", price: 3000, src: semillasImg, alt: "Semillas del ermitaño"},
        {id: 5, name: "Guantelete del infinito", price: 5000, src: guanteleteImg, alt: "Guantelete del infinito"},
        {id: 6, name: "Caja Misteriosa", price: 600, src: cajaImg, alt: "Caja misteriosa"},
    ],

    cart: []
}

export const shoppingReducer = (state, action) => {

    switch (action.type) {

        case TYPES.ADD_TO_CART: {

            let addedProduct = state.products.find( product => product.id === action.payload )

            let productOnCart = state.cart.find( product => product.id === addedProduct.id )

            return productOnCart ? //Validando si hay productos repetidos
                {
                    ...state,
                    cart: state.cart.map( product => product.id === addedProduct.id ? 
                        {
                            ...product, 
                            quantity: product.quantity + 1
                        } : 
                        product )
                } :
                {
                    ...state,
                    //Agregando una propiedad nueva (quantity) al arreglo de products para imprimir la cantidad de productos duplicados
                    cart: [ ...state.cart, {...addedProduct, quantity: 1} ]
                }
        }

        case TYPES.REMOVE_ONE_FROM_CART: {
            let productToRemove = state.cart.find( product => product.id === action.payload)

            //Para eliminar productos repetidos
            //Si el producto llega a 0 se quita de la lista de productos elegidos
            return productToRemove.quantity > 1 ? 
            {
                ...state,
                cart: state.cart.map( product => product.id === action.payload ? 
                    {
                        ...product,
                        quantity: product.quantity - 1
                    } :
                    product)
            } :
            {
                ...state,
                cart: state.cart.filter( product => product.id !== action.payload )
            }
        }

        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter( product => product.id !== action.payload )
            }
        }

        case TYPES.CLEAR_CART: {
            return shoppingInitialState
        }
    
        default:
            return state
    }
}