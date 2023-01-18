import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import ItemDetail from '../../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  
  const {id} = useParams();
  console.log(id)


  const getProduct = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve([
        {   name:'Charizard Base Set', 
        id:'bs323',
        set:'Base Set',
        precio: 100.00 ,
        descripcion:'Charizard Holo de Base Set',
        img:'/media/charibaseset.jpg'
        },
        {   name:'Blastoise Base Set', 
        id:'bs324',
        set:'Base Set',
        precio: 60.00 ,
        descripcion:'Blastoise Holo de Base Set',
        img:'/media/blastoisebaseset.jpg'
        },
        {   name:'Venasaur Base Set', 
        id:'bs325',
        set:'Base Set',
        precio: 15.00 ,
        descripcion:'Venasaur Holo de Base Set',
        img:'/media/vensaur.jpg'
        },
        {   name:'Magneton Base Set', 
        id:'bs326',
        set:'Base Set',
        precio: 16.00 ,
        descripcion:'Magneton Holo de Base Set',
        img:'/media/magneton.jpg'
        },
        {   name:'Zapdos Base Set', 
        id:'bs327',
        set:'Base Set',
        precio: 7.00 ,
        descripcion:'Zapdos Holo de Base Set',
        img:'/media/zapdos.jpg'
        },
        {   name:'Hitmonchan Base Set', 
        id:'bs328',
        set:'Base Set',
        precio:5.00 ,
        descripcion:'Hitmonchan Holo de Base Set',
        img:'/media/hitmonchan.jpg'
        },
      ]);
    },2000);
    
  })


  useEffect(()=>{
    getProduct
      .then((data)=>{
        setSingleProduct(data);
        console.log(data);
      })
      .catch((error)=> {console.log(error)
      });
  },[])
  

  return (
    <div>

      <Link to="/"> VOLVER </Link>
        
      <ItemDetail key={id} product = {singleProduct} />
        
        
        
    </div>
  )
}

export default ItemDetailContainer