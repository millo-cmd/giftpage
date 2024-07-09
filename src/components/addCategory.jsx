import { useState } from "react"

export const AddCategory = ({setCategorys}) => {
    const [inputValue, SetInputValue] = useState('Valorant')
   
    const OnInputChange = ({target}) =>{
        SetInputValue(target.value)
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        console.log(inputValue);
        setCategorys( categorias => [inputValue, ...categorias] )
    }
    
    return(
        <form onSubmit={ (event) => onSubmit(event)} action="">
            <input 
            type="text" 
            placeholder="Buscar gift" 
            value={ inputValue } 
            onChange={ OnInputChange}/>
        </form>
        
    )
}