import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddNote from './pages/AddNotes';
import PageNotFound from './pages/PageNotFound'
import DetailPage from './pages/DetailPage'

function NoteApp() {
    return (
        <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/add' element={<AddNote />} />
            <Route path='/detail/:id' element={<DetailPage />} />
        </Routes>
    )
}

export default NoteApp;