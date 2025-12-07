import { Profiler, useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import Basket from './components/Basket'

function App() {
  const [products] = useState([
    {id: 101, title: 'Psychology', price: '22', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2IsMQAjOKFsQnxWOL4giC6rvXaodBfQ7WXw&s"},
    {id: 102, title: 'Philosophy', price: '75', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0vtUpbPgd790p9FYZkw8ieCGUhv5gXVXDg&s"},
    {id: 103, title: 'Math', price: '43', photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbt7SSYFX7tRVwMtKbYbi8AsF2Wr-P_TexA&s"},
    {id: 104, title: 'History', price: '44', photo: "https://m.media-amazon.com/images/I/81tndPuXhSL._AC_UF1000,1000_QL80_.jpg"},
    {id: 105, title: 'Physics', price: '18', photo: "https://m.media-amazon.com/images/I/814VZlo2tXL._AC_UF1000,1000_QL80_.jpg"},
  ]);

  const [basket, setBasket] = useState([]);

  function move_to_card(product){
    const exists = basket.some(item => item.id === product.id);
    if(exists){
      increaseQuantity(product.id)
    } else {
      setBasket([...basket, {...product, quantity: 1}])
    }
  }

  function increaseQuantity(id){
      setBasket(
      basket.map(product => 
        product.id !== id ? product : {...product, quantity: product.quantity + 1}
      )
    )
  }


  function decreaseQuantity(id){
      setBasket(
        basket.map(product => {
          if(product.id === id){
            if(product.quantity > 1){
              return {...product, quantity: product.quantity - 1};
            } else {
              return null;
            }
          }
        }
        ).filter(product => product !== null)
      )
    }

    function closethebasket(id){
      setBasket(
        basket.filter(product => product.id !== id)
      )
    
    }
  return (
    <div>
       <h2> Shop </h2>
    <div>
      <div>
      <ProductList 
      products = {products}
      onMove = {move_to_card}
      />
      <Basket 
        basket = {basket}
        onClose= {closethebasket}
        onIncrease= {increaseQuantity}
        onDecrease= {decreaseQuantity}
      />
    </div>
    </div>
    </div>
  )
}

export default App
