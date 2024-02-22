import React from 'react';
import { getHeroes } from '../helpers/getHeroes';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
    const heroes = getHeroes(publisher)

  return (
  <div className='row row-cols-1 row-cols-md-3 g3'>
    {
        heroes.map(hero => (
           <HeroCard key={hero.id } {...hero}/>
        ))
    }
  </div>
  );
}



