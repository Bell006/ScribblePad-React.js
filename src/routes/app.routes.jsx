import { Routes, Route } from 'react-router-dom';

import { NewNote } from '../pages/NewNote';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/newNote' element={<NewNote />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/users' element={<Profile />} />
        </Routes>
    );
};
