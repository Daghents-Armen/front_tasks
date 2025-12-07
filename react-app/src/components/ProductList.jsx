import ProductItem from './ProductItems'

export default function App({ products, onMove }){
    return (
        <div>
        <div className='list'>
            <h3>Products</h3>
          {
            products.map(product => (
                <ProductItem 
                    key = {product.id}
                    product = {product}
                    onMove = {onMove}
                />
            )
            )
          }
        </div>
      </div>
    )
}