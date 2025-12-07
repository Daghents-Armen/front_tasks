export default function BasketItems({item, onClose, onIncrease, onDecrease}){
    return (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity} USD</td>
              <td>
              <button onClick={() => onClose(item.id)}>x</button>
              <button onClick={() => onIncrease(item.id)}>+</button>
              <button onClick={() => onDecrease(item.id)}>-</button>
              </td>
            </tr>
    )
}