import { useState } from "react"

import { AddCategory } from "./components/addCategory"

export const GiftExpertApp = () =>{

    const [categorias, setCategorias] = useState([ 'Marvel', 'Dc' ])

    const onAddCategory = (newCategory) =>{
        console.log(newCategory);
        setCategorias([ newCategory,...categorias])
    }

    return(
        <>
            <h1>GiftExpertApp</h1>
            
            <AddCategory onNewCategory={ onAddCategory } />

            {/* <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                { categorias.map( category =>{
                    return(
                        <li key={category}> {category} </li>
                    )
                } ) }
                
            </ol>
        </>
    )
}