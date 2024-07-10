import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {
    const [inputValue, SetInputValue] = useState('')
   
    const OnInputChange = ({target}) =>{
        SetInputValue(target.value)
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return; 


        // setCategorys( categorias => [inputValue, ...categorias] )

        onNewCategory(inputValue.trim())

        SetInputValue('');
    }
    
    return(
        <form onSubmit={ onSubmit} action="">
            <input 
            type="text" 
            placeholder="Buscar gift" 
            value={ inputValue } 
            onChange={ OnInputChange}/>
        </form>
        
    )
}

// esto no es nada importante