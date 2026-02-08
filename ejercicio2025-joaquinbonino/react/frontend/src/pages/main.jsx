import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import '@styles/index.css'
import Layout from '@components/Layout.jsx';
import Login from "./Login.jsx";
import Activities from './Activities.jsx';
import Home from './Home.jsx';
import Poke from './Poke.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> } >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/actividades" element={<Activities />} />
          <Route path="/poke" element={<Poke />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  </StrictMode>,
)