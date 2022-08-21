import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <>
    
      <div>

        <h1 className="text-center
                      text-3xl
                      py-3">
                        Carrito de compras con useReducer 🛒
        </h1>
        <hr />

        <ShoppingCart />

      </div>
    
    </>
  );
}

export default App;
