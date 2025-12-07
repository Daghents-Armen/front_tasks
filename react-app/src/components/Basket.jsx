import BasketItems from "./BasketItems";

export default function Basket({basket, onClose, onIncrease, onDecrease}){
   return (
    <div>
      <h3> Table </h3>
     <table>
        <thead>
            <tr>
              <th> Product </th>
              <th> Price </th>
              <th> Quantity </th>
              <th> Subtotal </th>
              <th> Actions </th>
            </tr>
        </thead>
        <tbody>
          {
            basket.map(item => 
            (
                <BasketItems
                key = {item.id}
                item = {item}
                onClose = {onClose}
                onIncrease = {onIncrease}
                onDecrease = {onDecrease}
                />
            )
            )
          }
        </tbody>
      </table>
    </div>
   )
}