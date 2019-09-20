import React,{Component} from 'react';
import './App.css';

class Pokedex extends Component{
    render(){
        function pokegame(card)
        {        
              return card.map( poki=>         
                <div className='pokedex'>                  
                    <h3 className="name"> {poki.name}</h3>
                    <img className="pokedex-img"
                         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poki.id}.png` }
                         alt="Pokemon is Not Available " />
                    <p>Type : {poki.type}</p>
                    <p>Experience : {poki.base_experience}</p>
                </div>)
        }

        return (                 
                  pokegame(this.props.team)
                );
    }

}

export default Pokedex;