import { useState } from "react"

import { AddCategory } from "./components/addCategory"

export const GiftExpertApp = () =>{

    const [categorias, setCategorias] = useState([ 'Marvel', 'Dc' ])

    const onAddCategory = () =>{
        setCategorias([ 'valorant',...categorias])
    }

    return(
        <>
            <h1>GiftExpertApp</h1>
            
            <AddCategory setCategorys={ setCategorias } />

            <button onClick={onAddCategory}>Agregar</button>
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