import { useState } from "react"
import { AddCategory,GifGrid } from "./components"




export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    

    const onAddCategory = (newCategory) => {
          

        if(categories.includes(newCategory) ) return;

         setCategories([newCategory, ...categories  ]);
    }


    return (
           <>
           {/* titulo */}
           <h1>GifExpertApp</h1>

           

           {/* input */} 
             <AddCategory 
             onNewCategory={onAddCategory}
            // setCategories={ setCategories }
             />



          
          
            { 
               categories.map( (category) => ( 
                    <GifGrid key={category} 
                    category={category} />
                  ))
            }
            
           
     
           </>

    )
}