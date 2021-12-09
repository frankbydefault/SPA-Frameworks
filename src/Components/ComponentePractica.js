import React, {Component} from 'react';

class ComponentePractica extends Component{

    render(){ //funciones y variables

        let receta ={
            nombre: 'pizza',
            ingredientes: ['queso','tocino'],
            calorias: 460 ,
            precio: 7990
        };

        return( //Solo puede devolver una etiqueta

            <React.Fragment> 
                <h1> {receta.nombre} </h1>  
                <h2> {'Precio:' + receta.precio} </h2> 

                <ol>
                    {
                        receta.ingredientes.map((ingrediente,i) => {
                            console.log(ingrediente);

                            return(
                            <li key={i}>
                                {ingrediente}
                            </li>

                            );  
                        })
                    }    
                </ol>
                
            </React.Fragment>
            

        );
    }
}

export default ComponentePractica;