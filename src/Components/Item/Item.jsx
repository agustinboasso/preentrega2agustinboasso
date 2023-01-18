import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import './Item.css'

const Item = ({producto}) => {
  return (
    <li key={producto.id} width="200" className="product" >
        <img src={producto.img} alt={producto.name} />
        <h2>{producto.name}</h2>
        <h2>Precio: {producto.precio} USD</h2>
        <h3>{producto.set}</h3>
        <h3>{producto.descripcion}</h3>
       
    </li>
    
    
   
      
    
  );
};

export default Item;