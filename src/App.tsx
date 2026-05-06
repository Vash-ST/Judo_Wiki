/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tecnicas from './pages/Tecnicas';
import NageWaza from './pages/NageWaza';
import KatameWaza from './pages/KatameWaza';
import UC from './pages/UC';
import SaludBienestar from './pages/SaludBienestar';
import RecomendacionOMS from './pages/RecomendacionOMS';
import FactoresSaludUC from './pages/FactoresSaludUC';
import GuiaSaludDeporte from './pages/GuiaSaludDeporte';
import PrincipiosJudo from './pages/PrincipiosJudo';
import Cursos from './pages/Cursos';
import CursoDetalle from './pages/CursoDetalle';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black" id="app-root">
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tecnicas" element={<Tecnicas />} />
            <Route path="/nage-waza" element={<NageWaza />} />
            <Route path="/katame-waza" element={<KatameWaza />} />
            <Route path="/uc" element={<UC />} />
            <Route path="/salud" element={<SaludBienestar />} />
            <Route path="/recomendacion-oms" element={<RecomendacionOMS />} />
            <Route path="/factores-salud" element={<FactoresSaludUC />} />
            <Route path="/guia-salud-deporte" element={<GuiaSaludDeporte />} />
            <Route path="/principios" element={<PrincipiosJudo />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/cursos/:id" element={<CursoDetalle />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
