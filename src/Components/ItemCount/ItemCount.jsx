import './ItemCount.css';
import { useState } from 'react';

const ItemCount = () => {
  const [contador, setContador] = useState(0);
  const stock = 10;
  const sumar = () => {
    if(stock === contador){
      alert('No hay stock')
      return;
    }
    setContador(contador + 1)
  };
  const restar = () => {
    if(contador === 0){
      alert('No puedes comprar unidades negativas')
      return;
    }
    setContador(contador -1)
  };
  
  return (
    <div className="counter">
      <div className="controllers">
        <button onClick={restar}>-</button>
        <div>
          <span>{contador}</span>
        </div>
        <button onClick={sumar}>+</button>
      </div>
      
      <div>
      <button>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount;