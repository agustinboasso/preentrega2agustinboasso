import Item from "../Item/Item";
import {Link} from 'react-router-dom';

const ItemList = ({productos}) => {
  return (
    <ul className="lista">
      {productos.map((producto) => (
        <Link key={producto.id} to={`item/${producto.id}`}>
          <Item key={producto.id} producto = {producto}/>
        </Link>
      ))}
    </ul>
  )
}

export default ItemList;