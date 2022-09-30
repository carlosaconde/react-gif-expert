
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";




export const GifGrid = ({category}) => {

const { images, isloading} = useFetchGifs(category);
      

  return (
    <>
        <h3> {category}</h3>

      {
        isloading && (<h2>CARGANDO .....</h2>)
      }

        


        <div className="card-grid">
          {
            images.map( (image)=>(  
               <GifGridItem 
                  key={image.id}
                  {...image}  
                
               />
            
            ))
          }
         
        </div>
    
    </>
  )
}
