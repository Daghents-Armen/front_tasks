export default function BasketItems({ product, onMove}){
            return (
            <div>
            <img 
              src = {product.photo}
              />
              <p> {product.title} </p>
              <strong> {product.price} USD </strong>
              <button onClick={() => onMove(product)}> Add to Basket </button>
              </div>
            )
}