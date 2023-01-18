import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
const ItemDetail = ({product}) => {
  return (
    <div className="lista">
      
      {product.map((product) => (
        <ul> 
          <div className="productoDescripcion">
        
            <img src={product.img} alt={product.name}/>
            <h2>{product.name}</h2>
            <h3>{product.set}</h3>
            <h3>{product.descripcion}</h3>
            <ItemCount/>
    
          </div> 
        </ul> 
      ))}
    </div>
    
    
    
    
    
    
  );
};

export default ItemDetail;

