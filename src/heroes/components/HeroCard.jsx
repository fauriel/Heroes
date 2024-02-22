import React from 'react';
import { Link } from 'react-router-dom';


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
const heroImage = `/assets/heroes/${id}.jpg`
  return (
    <div className='col  animate__animated animate__bounce'>
        <div className='card'> 
        <div className='row no-gutters'>
            <div className='col-4'>
                <img src={heroImage} className='card-img' alt={superhero} />

            </div>
            <div className='col-8'>
                <h5 className='card-title'>{superhero}</h5>
                <p className='card-texxt'>{alter_ego}</p>

                {
                    (alter_ego !== characters) && ( <p>{characters}</p>)
                }
               
               <p className='card-text'>
                <small className='text-muted'>{ first_appearance }</small>
               </p>

               <Link to={`/heroe/${id}`}>Ver más...</Link>
            </div>


        </div>
            
            </div>      
    </div>
  );
}

