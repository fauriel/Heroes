
import React from 'react';
import { Login } from '../auth/pages/Login';

import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { Route, Routes } from 'react-router';

 export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='login' element={<Login />}/>

        <Route path='/*' element={<HeroesRoutes />}/>
    
  
    </Routes>
        
    </>
  );
}


