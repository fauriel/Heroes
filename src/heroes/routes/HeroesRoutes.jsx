import React from 'react';
import { Navbar } from '../../ui/components/Navbar';
import { Navigate, Route, Routes } from 'react-router';
import { DcPage } from '../pages/DcPage';
import { Marvel } from '../pages/Marvel';
import { SearchPage } from '../pages/SearchPage';
import { HeroPage } from '../pages/HeroPage';


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>

                <Routes>
                    <Route path='marvel' element={<Marvel />} />
                    <Route path='DcPage' element={<DcPage />} />

                    <Route path='search' element={<SearchPage />} />
                    <Route path='heroe/:id' element={<HeroPage />} />

                    <Route path='/' element={<Navigate to="/marvel" />} />

                </Routes>
            </div>

        </>
    );
}


