import React, {Component} from 'react';
import ComponenteEstatico from './ComponenteEstatico';

class Peliculas extends Component{

    render(){

        return(

            <div id= "peliculas">
                <h4> Soy el componente de peliculas</h4>
                <ComponenteEstatico/>
            </div>
            
        );
    }

} export default Peliculas;